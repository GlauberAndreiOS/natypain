import { useEffect } from 'react'
import {
  ApproachSection,
  ExpertiseSection,
  FooterSection,
  FormationSection,
  PricesSection,
  PresentationSection,
  TestimonialsSection,
  WelcomeSection,
} from './sections'
import { SectionHeader } from './components/SectionHeader'
import { ThemeToggle } from './components/ThemeToggle'
import { useThemeMode } from './constants/theme'
import { setupSectionScroll, smoothScrollToSectionByHash } from './utils/sectionScroll'

export default function App() {
  const { mode, setMode } = useThemeMode()

  useEffect(() => {
    return setupSectionScroll()
  }, [])

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      event.preventDefault()
      smoothScrollToSectionByHash(href)
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [])

  return (
    <div className="bg-[var(--color-bg)] font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-[var(--color-text)] antialiased">
      <SectionHeader />
      <main>
        <WelcomeSection />
        <PresentationSection />
        <ApproachSection />
        <FormationSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <PricesSection />
        <FooterSection />
      </main>
      <ThemeToggle mode={mode} onChange={setMode} />
    </div>
  )
}
