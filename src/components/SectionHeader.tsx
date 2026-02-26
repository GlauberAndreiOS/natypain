import { useEffect, useState } from 'react'

const sectionLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#apresentacao', label: 'Apresentação' },
  { href: '#abordagem', label: 'Abordagem Terapêutica' },
  { href: '#formacao', label: 'Formação e Perfil' },
  { href: '#especialidades', label: 'Atuação e Competências' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#precos', label: 'Investimento' },
  { href: '#contato', label: 'Contato' },
]

export function SectionHeader() {
  const [activeHref, setActiveHref] = useState('#inicio')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (!target) return

    const rect = target.getBoundingClientRect()
    const availableViewport = window.innerHeight
    const centerOffset = (availableViewport - rect.height) / 2
    const targetTop = window.scrollY + rect.top - centerOffset

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    })
    setActiveHref(href)
  }

  useEffect(() => {
    const sections = sectionLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visible.length) return
        const currentId = visible[0].target.getAttribute('id')
        if (currentId) setActiveHref(`#${currentId}`)
      },
      { threshold: [0.35, 0.55, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        data-floating-header
        className="fixed top-3 left-1/2 z-40 hidden w-[80vw] -translate-x-1/2 rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-surface)]/85 shadow-lg backdrop-blur md:block"
      >
        <nav className="mx-auto flex gap-2 overflow-x-auto px-2 py-2 md:justify-center">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(link.href)
              }}
              className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold no-underline transition ${
                activeHref === link.href
                  ? 'text-[var(--color-secondary)] underline decoration-2 underline-offset-8'
                  : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-3 right-3 z-50 rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-lg md:hidden"
      >
        Menu
      </button>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 p-4 md:hidden" role="dialog" aria-modal="true">
          <div className="mx-auto mt-12 max-h-[78vh] w-full max-w-sm overflow-y-auto rounded-2xl bg-[var(--color-surface)] p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="m-0 text-lg font-bold">Navegação</h2>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="rounded-full px-3 py-1 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]"
              >
                Fechar
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(link.href)
                    setIsDrawerOpen(false)
                  }}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold no-underline transition ${
                    activeHref === link.href
                      ? 'bg-[var(--color-bg-alt)] text-[var(--color-secondary)] underline decoration-2 underline-offset-6'
                      : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
