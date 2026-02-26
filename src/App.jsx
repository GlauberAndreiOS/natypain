const abilities = [
  'Terapia Cognitivo-Comportamental',
  'Acolhimento para ansiedade e estresse',
  'Desenvolvimento de autoestima e autoconhecimento',
  'Orientação emocional para relacionamentos',
]

const testimonials = [
  {
    name: 'Paciente A.',
    text: 'Me senti acolhida desde a primeira sessão. Hoje consigo lidar melhor com minha ansiedade e tenho mais clareza sobre minhas escolhas.',
  },
  {
    name: 'Paciente R.',
    text: 'A terapia me ajudou a construir uma rotina mais leve e respeitar meus limites sem culpa.',
  },
  {
    name: 'Paciente C.',
    text: 'Excelente profissional, escuta atenta e direcionamentos muito práticos para o dia a dia.',
  },
]

const whatsappNumber = '5511999999999'

export default function App() {
  return (
    <>
      <header className="hero">
        <nav className="navbar container">
          <h2>Dra. Natália</h2>
          <a className="btn-secondary" href="#contato">
            Agendar sessão
          </a>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">Psicóloga Clínica • CRP 00/00000</p>
          <h1>Cuidado psicológico com empatia, técnica e presença</h1>
          <p>
            Atendimento online para adolescentes e adultos que buscam equilíbrio emocional,
            autoconhecimento e qualidade de vida.
          </p>
          <a className="btn-primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="section container" id="apresentacao">
          <h2>Apresentação</h2>
          <p>
            Sou a Dra. Natália, psicóloga com atuação focada em saúde emocional e desenvolvimento
            humano. Meu trabalho é oferecer um espaço seguro para você compreender suas emoções,
            elaborar conflitos e construir uma vida com mais sentido.
          </p>
        </section>

        <section className="section alt" id="habilidades">
          <div className="container">
            <h2>Áreas de atuação</h2>
            <div className="abilities-grid">
              {abilities.map((item) => (
                <article key={item} className="card">
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="depoimentos">
          <h2>Depoimentos</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="testimonial-card">
                <p>“{testimonial.text}”</p>
                <footer>{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section cta" id="contato">
          <div className="container">
            <h2>Vamos conversar?</h2>
            <p>
              Entre em contato para tirar dúvidas, conhecer a abordagem terapêutica e agendar sua
              primeira sessão.
            </p>
            <a className="btn-primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              Entrar em contato pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Dra. Natália Psicóloga • Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
