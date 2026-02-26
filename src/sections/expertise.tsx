import { practiceAreas, professionalExperience, technicalSkills, theoreticalApproach } from '../data/professionalProfile'

export function ExpertiseSection() {
  return (
    <section className="min-h-[70vh] text-justify md:h-screen" id="especialidades" data-scroll-section>
      <div className="mx-auto flex h-full w-[90vw] flex-col md:w-[80vw]">
        <div className="shrink-0">
          <h2 className="mt-0 mb-3 pt-8 text-[clamp(1rem,3vw,1.4rem)] font-bold md:pt-20">Atuação e Competências</h2>
        </div>
        <div className="flex flex-1 items-center pb-4 md:pb-0">
          <div className="grid w-full gap-2 md:grid-cols-2">
            <article className="rounded-xl bg-[var(--color-surface)] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-2 text-xs sm:text-sm md:text-base font-semibold">Abordagem Teórica</h3>
              <ul className="space-y-1 pl-4 text-xs sm:text-sm">
                {theoreticalApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-2 text-xs sm:text-sm md:text-base font-semibold">Áreas de Atuação</h3>
              <ul className="space-y-1 pl-4 text-xs sm:text-sm">
                {practiceAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-2 text-xs sm:text-sm md:text-base font-semibold">Competências Técnicas</h3>
              <ul className="space-y-1 pl-4 text-xs sm:text-sm">
                {technicalSkills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-2 text-xs sm:text-sm md:text-base font-semibold">Experiência Profissional</h3>
              <ul className="space-y-1 pl-4 text-xs sm:text-sm">
                {professionalExperience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
