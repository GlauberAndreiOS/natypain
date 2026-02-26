import { practiceAreas, professionalExperience, technicalSkills, theoreticalApproach } from '../data/professionalProfile'

export function ExpertiseSection() {
  return (
    <section className="min-h-screen text-justify md:h-screen" id="especialidades" data-scroll-section>
      <div className="mx-auto flex h-full w-[90vw] flex-col md:w-[80vw]">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Atuação e Competências</h2>
        </div>
        <div className="flex flex-1 items-center pb-8 md:pb-0">
          <div className="grid w-full gap-4 md:grid-cols-2">
            <article className="rounded-xl bg-[var(--color-surface)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-3 text-lg font-semibold">Abordagem Teórica</h3>
              <ul className="space-y-2 pl-5">
                {theoreticalApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-3 text-lg font-semibold">Áreas de Atuação</h3>
              <ul className="space-y-2 pl-5">
                {practiceAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-3 text-lg font-semibold">Competências Técnicas</h3>
              <ul className="space-y-2 pl-5">
                {technicalSkills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-[var(--color-surface)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <h3 className="mb-3 text-lg font-semibold">Experiência Profissional</h3>
              <ul className="space-y-2 pl-5">
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
