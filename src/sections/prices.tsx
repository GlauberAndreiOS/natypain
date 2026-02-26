export function PricesSection() {
  return (
    <section className="h-screen bg-[var(--color-bg-alt)] text-justify" id="precos" data-scroll-section>
      <div className="mx-auto flex h-full w-[80vw] flex-col">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Investimento</h2>
        </div>
        <div className="flex flex-1 items-center">
          <div>
            <p className="max-w-4xl leading-relaxed">
              Sua saúde mental não é um gasto, mas um investimento necessário e inegociável. Quando
              seguimos presos aos traumas do passado, reduzimos nossa capacidade de viver com
              clareza, autonomia e consistência no presente.
            </p>
            <p className="mt-4 max-w-4xl leading-relaxed">
              O processo terapêutico é um compromisso com o seu futuro: melhora nos
              relacionamentos, mais equilíbrio emocional e decisões mais alinhadas com quem você
              deseja se tornar. Os valores são alinhados no contato inicial, com transparência e
              respeito à sua realidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
