import { testimonials } from '../data'

export function TestimonialsSection() {
  return (
    <section className="h-auto text-justify md:h-screen" id="depoimentos" data-scroll-section>
      <div className="mx-auto flex w-[80vw] flex-col md:h-full">
        <div className="shrink-0">
          <h2 className="mt-0 mb-4 pt-20 text-[clamp(1.5rem,3vw,2.2rem)] font-bold md:pt-24">Depoimentos</h2>
        </div>
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="m-0 flex min-h-[180px] flex-col rounded-[14px] bg-[var(--color-surface)] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
              >
                <p>“{testimonial.text}”</p>
                <footer className="mt-auto pt-4 text-right font-semibold text-[var(--color-secondary)]">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
