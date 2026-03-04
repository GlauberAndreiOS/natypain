const SCROLL_COOLDOWN_MS = 700
const DELTA_THRESHOLD = 30
const SCROLL_SYNC_DELAY_MS = 120
const DEFAULT_SCROLL_DURATION_MS = 650
const DEFAULT_SELECTOR = '[data-scroll-section]'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const easeInOutCubic = (progress) =>
  progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

const getCenteredTargetTop = (element) => {
  const rect = element.getBoundingClientRect()
  const sectionTop = window.scrollY + rect.top
  const centerOffset = (window.innerHeight - rect.height) / 2
  return Math.max(0, sectionTop - centerOffset)
}

function animateWindowScrollTo(targetTop, durationMs = DEFAULT_SCROLL_DURATION_MS) {
  if (prefersReducedMotion() || durationMs <= 0) {
    window.scrollTo({ top: targetTop, behavior: 'auto' })
    return
  }

  const startTop = window.scrollY
  const distance = targetTop - startTop
  if (Math.abs(distance) < 1) return

  const startTime = performance.now()
  const tick = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / durationMs, 1)
    const easedProgress = easeInOutCubic(progress)
    window.scrollTo({ top: startTop + distance * easedProgress, behavior: 'auto' })
    if (progress < 1) window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)
}

export function smoothScrollToElementCentered(element, durationMs = DEFAULT_SCROLL_DURATION_MS) {
  if (!element) return
  animateWindowScrollTo(getCenteredTargetTop(element), durationMs)
}

export function smoothScrollToSectionByHash(hash, durationMs = DEFAULT_SCROLL_DURATION_MS) {
  if (!hash?.startsWith('#')) return
  const target = document.querySelector(hash)
  if (!target) return
  smoothScrollToElementCentered(target, durationMs)
}

export function setupSectionScroll({
  selector = DEFAULT_SELECTOR,
  scrollCooldownMs = SCROLL_COOLDOWN_MS,
  deltaThreshold = DELTA_THRESHOLD,
  scrollDurationMs = DEFAULT_SCROLL_DURATION_MS,
} = {}) {
  if (window.matchMedia('(pointer: coarse)').matches) return () => {}

  const sections = Array.from(document.querySelectorAll(selector))
  if (!sections.length) return () => {}

  let scrollSyncTimeout
  let currentSectionIndex = 0
  let lastScrollTime = 0

  const scrollToSection = (nextIndex) => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, sections.length - 1))
    currentSectionIndex = boundedIndex

    const targetSection = sections[boundedIndex]
    smoothScrollToElementCentered(targetSection, scrollDurationMs)
    lastScrollTime = Date.now()
  }

  const onWheel = (event) => {
    if (Math.abs(event.deltaY) < deltaThreshold) return

    const now = Date.now()
    if (now - lastScrollTime < scrollCooldownMs) {
      event.preventDefault()
      return
    }

    const direction = event.deltaY > 0 ? 1 : -1
    const nextIndex = currentSectionIndex + direction
    if (nextIndex < 0 || nextIndex >= sections.length) return

    event.preventDefault()
    scrollToSection(nextIndex)
  }

  const syncCurrentSectionFromViewport = () => {
    const viewportCenter = window.innerHeight / 2
    let bestIndex = currentSectionIndex
    let bestDistance = Number.POSITIVE_INFINITY

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const sectionCenter = rect.top + rect.height / 2
      const distance = Math.abs(sectionCenter - viewportCenter)

      if (distance < bestDistance) {
        bestDistance = distance
        bestIndex = index
      }
    })

    currentSectionIndex = bestIndex
  }

  const onScroll = () => {
    window.clearTimeout(scrollSyncTimeout)
    scrollSyncTimeout = window.setTimeout(syncCurrentSectionFromViewport, SCROLL_SYNC_DELAY_MS)
  }

  syncCurrentSectionFromViewport()
  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('scroll', onScroll)
    window.clearTimeout(scrollSyncTimeout)
  }
}
