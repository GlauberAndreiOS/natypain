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
import { setupSectionScroll } from './utils/sectionScroll'

export default function App() {
  const { mode, setMode } = useThemeMode()

  useEffect(() => {
    return setupSectionScroll()
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
