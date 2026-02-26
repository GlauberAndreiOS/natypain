import profileApproach from '../assets/photos/IMG_2212.JPG'

export function ApproachSection() {
  return (
    <section className="min-h-screen bg-[var(--color-bg-alt)] text-justify md:h-screen" id="abordagem" data-scroll-section>
      <div className="mx-auto flex h-full w-[90vw] flex-col md:w-[80vw]">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Abordagem Terapêutica</h2>
        </div>
        <div className="flex flex-1 items-center pb-8 md:pb-0">
          <div className="grid items-center gap-6 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
            <figure className="order-first mx-auto w-fit">
              <img
                src={profileApproach}
                alt="Profissional durante atendimento terapêutico"
                className="h-[280px] w-[220px] rounded-2xl object-cover shadow-xl sm:h-[340px] sm:w-[260px] md:h-[420px] md:w-[320px]"
              />
              <figcaption className="mt-2 text-center text-sm text-[var(--color-muted)]">Abordagem baseada em evidências</figcaption>
            </figure>
            <p className="max-w-4xl text-[1.03rem] leading-relaxed md:text-[1.08rem]">
              A abordagem utilizada na nossa psicoterapia será baseada nos estudos mais atuais da
              ciência psicológica comportamental e aplicados às demandas trazidas por você, sejam
              elas problemas nos relacionamentos, trabalho, família ou transtornos como Depressão,
              Ansiedade, TDAH ou Autismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
