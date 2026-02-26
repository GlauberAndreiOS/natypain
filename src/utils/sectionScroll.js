const SCROLL_COOLDOWN_MS = 700
const DELTA_THRESHOLD = 30
const SCROLL_SYNC_DELAY_MS = 120
const DEFAULT_SELECTOR = '[data-scroll-section]'

export function setupSectionScroll({
  selector = DEFAULT_SELECTOR,
  scrollCooldownMs = SCROLL_COOLDOWN_MS,
  deltaThreshold = DELTA_THRESHOLD,
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
    const rect = targetSection.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const availableViewport = window.innerHeight
    const centerOffset = (availableViewport - rect.height) / 2
    const targetTop = Math.max(0, sectionTop - centerOffset)

    window.scrollTo({ top: targetTop, behavior: 'smooth' })
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
