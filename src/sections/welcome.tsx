import { CRP, WHATSAPP_NUMBER } from '../constants/contact'
import profileHero from '../assets/photos/profile with transparency.png'

export function WelcomeSection() {
	return (
		<section className="h-screen bg-[linear-gradient(145deg,var(--color-bg-alt),var(--color-bg))] text-justify" id="inicio" data-scroll-section>
			<header className="flex h-full flex-col">
				<nav className="mx-auto flex w-[80vw] flex-col items-start gap-3 pt-20 pb-4 sm:flex-row sm:items-center sm:justify-between sm:pt-24 sm:pb-5">
					<h2 className="m-0 text-[clamp(1.2rem,2.8vw,1.8rem)] font-bold">Psi. Natália Pain Oliveira</h2>
					<a
						className="hidden rounded-full bg-[var(--color-surface)] px-5 py-3 text-center font-bold text-[var(--color-text)] no-underline transition-transform duration-200 hover:-translate-y-px sm:inline-block sm:w-auto"
						href="#contato"
					>
						Agendar sessão
					</a>
				</nav>

				<div className="mx-auto flex w-[80vw] max-w-[720px] flex-1 items-center">
					<div className="w-full text-center">
						<div className="relative mx-auto mb-4 w-fit">
							<img
								src={profileHero}
								alt="Retrato da psicóloga Natália"
								className="mx-auto h-[25vh] w-auto max-h-[20rem] object-contain sm:h-[35vh] md:h-[45vh]"
							/>
							<div className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-[132%] -translate-x-1/2 bg-[var(--color-bg)]/18 backdrop-blur-[30px] [mask-image:linear-gradient(to_bottom,transparent,black_70%,black)] md:h-28" />
							<div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-[132%] -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,var(--color-bg))] opacity-75 md:h-36" />
						</div>
						<p className="font-semibold tracking-[0.08em] text-[var(--color-secondary)] uppercase">Psicóloga Especialista • CRP {CRP}</p>
						<h1 className="my-1 text-[clamp(1rem,2vw,2.4rem)] leading-tight font-bold">
							Vem viver uma vida leve e genuína
						</h1>
						<p className="mb-4 leading-relaxed text-sm sm:text-base sm:mb-6">
							Psicologia especializada e baseada em evidências
						</p>
						<a
							className="inline-block w-full rounded-full bg-[var(--color-primary)] px-4 py-2 font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-px sm:w-auto"
							href={`https://wa.me/${WHATSAPP_NUMBER}`}
							target="_blank"
							rel="noreferrer"
						>
							Falar no WhatsApp
						</a>
					</div>
				</div>
			</header>
		</section>
	)
}
