import profilePresentation from '../assets/photos/IMG_2470.JPG'

export function PresentationSection() {
  return (
    <section className="min-h-screen text-justify md:h-screen" id="apresentacao" data-scroll-section>
      <div className="mx-auto flex h-full w-[90vw] flex-col md:w-[80vw]">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Apresentação</h2>
        </div>
        <div className="flex flex-1 items-center pb-8 md:pb-0">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
            <div>
              <p className="mb-3 text-[1.03rem] leading-relaxed md:text-[1.08rem]">Olá, me chamo Natália.</p>
              <p className="mb-3 text-[1.03rem] leading-relaxed md:text-[1.08rem]">Mas pode me chamar de Naty.</p>
              <p className="text-[1.03rem] leading-relaxed md:text-[1.08rem]">
                Sinto-me profundamente apaixonada pela ideia de poder ajudar pessoas a se conhecerem
                mais e compreenderem melhor aquilo que a levaria a viver uma vida mais plena,
                equilibrada e feliz. Através de uma psicoterapia atualizada e baseada em evidências
                você poderá encontrar novas maneiras de interpretar e vivenciar suas emoções e seus
                relacionamentos, ressignificando padrões de comportamento que muitas vezes limitam seu
                crescimento e impedem de viver uma vida leve e que faça real sentido para você.
              </p>
            </div>
            <figure className="order-first mx-auto w-fit md:order-none">
              <img
                src={profilePresentation}
                alt="Natália em ambiente acolhedor de atendimento"
                className="h-[280px] w-[220px] rounded-2xl object-cover shadow-xl sm:h-[340px] sm:w-[260px] md:h-[420px] md:w-[320px]"
              />
              <figcaption className="mt-2 text-center text-sm text-[var(--color-muted)]">Atendimento humanizado e acolhedor</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
