import { WHATSAPP_NUMBER } from '../constants/contact'

export function FooterSection() {
  return (
    <section className="h-screen bg-[var(--color-bg-alt)] text-center" id="contato" data-scroll-section>
      <div className="mx-auto flex h-full w-[80vw] flex-col">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Contato</h2>
        </div>
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="mx-auto mb-3 max-w-3xl text-lg font-semibold">Vamos conversar?</p>
            <p className="mx-auto mb-6 max-w-3xl leading-relaxed">
              Entre em contato para tirar dúvidas, conhecer a abordagem terapêutica e agendar sua
              primeira sessão.
            </p>
            <a
              className="inline-block rounded-full bg-[var(--color-primary)] px-5 py-3 font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              Entrar em contato pelo WhatsApp
            </a>
          </div>
        </div>
        <footer className="pb-8 text-center text-sm text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Dra. Natália Psicóloga • Todos os direitos reservados.</p>
        </footer>
      </div>
    </section>
  )
}
