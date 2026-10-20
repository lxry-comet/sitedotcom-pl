import { Component } from 'react'
import css from './AboutProcess.module.css'

const MISSION_CARDS = [
	{
		id: 'misja',
		title: 'Moja misja',
		description: 'Moim celem jest tworzenie produktów, które nie tylko dobrze wyglądają, ale przede wszystkim pomagają rozwijać biznes.',
	},
	{
		id: 'podejscie',
		title: 'Moje podejście',
		description: 'Każdy klient otrzymuje indywidualne rozwiązanie. Nie korzystam z gotowych szablonów — projekt powstaje specjalnie dla Ciebie.',
	},
	{
		id: 'jakosc',
		title: 'Jakość',
		description: 'Kod jest przejrzysty, responsywny i zoptymalizowany pod SEO oraz wysoką wydajność.',
	},
]

const FEATURES = [
	{
		id: 'szybkosc',
		title: 'Szybka realizacja',
		description: 'Terminowo realizuję projekty bez utraty jakości.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="8" />
				<path d="M12 7.5V12l3 2" />
			</svg>
		),
	},
	{
		id: 'design',
		title: 'Nowoczesny design',
		description: 'Minimalistyczny wygląd, który buduje zaufanie klientów.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<rect x="5.5" y="5.5" width="13" height="13" rx="2" transform="rotate(45 12 12)" />
			</svg>
		),
	},
	{
		id: 'responsywnosc',
		title: 'Responsywność',
		description: 'Idealny wygląd na telefonach, tabletach i komputerach.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="5" width="12" height="14" rx="2" />
				<rect x="16" y="10" width="5" height="9" rx="1.5" />
			</svg>
		),
	},
	{
		id: 'wydajnosc',
		title: 'Wydajność',
		description: 'Szybkie ładowanie i wysoka optymalizacja.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<path d="M4 19h16" />
				<path d="M7 19v-5" />
				<path d="M12 19V9" />
				<path d="M17 19V5" />
			</svg>
		),
	},
	{
		id: 'bezpieczenstwo',
		title: 'Bezpieczeństwo',
		description: 'Nowoczesne rozwiązania i bezpieczny kod.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<rect x="5" y="10.5" width="14" height="9" rx="2" />
				<path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
			</svg>
		),
	},
	{
		id: 'wsparcie',
		title: 'Wsparcie',
		description: 'Pomoc również po zakończeniu projektu.',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<path d="M20 12.5a8 8 0 1 0-3.2 6.4L20 20l-.8-3.1A8 8 0 0 0 20 12.5Z" />
				<path d="M9 12.5h6" />
			</svg>
		),
	},
]

const PROCESS_STEPS = [
	{
		id: 'step_01',
		title: 'Kontakt',
		description: 'Piszesz do mnie kilka zdań o firmie, a ja odpowiadam z pytaniami, które naprawdę mają znaczenie.',
	},
	{
		id: 'step_02',
		title: 'Analiza',
		description: 'Układam zakres, harmonogram i konkretną wycenę — bez ukrytych kosztów na końcu.',
	},
	{
		id: 'step_03',
		title: 'Projekt',
		description: 'Dostajesz projekt UI/UX do wglądu i komentarzy, zanim powstanie pierwsza linia kodu.',
	},
	{
		id: 'step_04',
		title: 'Development',
		description: 'Programuję stronę lub aplikację i pokazuję postępy na bieżąco, na żywym podglądzie.',
	},
	{
		id: 'step_05',
		title: 'Testy',
		description: 'Sprawdzam szybkość, formularze i wygląd na telefonach — wszystko przed publikacją.',
	},
	{
		id: 'step_06',
		title: 'Wdrożenie',
		description: 'Publikuję projekt na Twojej domenie, przekazuję dostępy i zostaję pod telefonem.',
	},
]

//?  'TypeScript','Shopify', 'Supabase', 'Stripe',

const STACK_PILLS = [
	'HTML5', 'CSS3', 'JavaScript', 'React',
	'Vite', 'SendGrid', 'Git',
]

export class AboutProcess extends Component {
	render() {
		return (
			<>
				<section id="about-process">
					<div className={css.aboutProcessContainer}>
						{/* left column — o mnie */}
						<div className={css.aboutCol} id="about">
							<div className={css.aboutTitle}>
								<span className={css.aboutTag}>{'< about />'}</span>
								<h2>Kim jestem?</h2>
								<p>
									Jestem programistą Full Stack specjalizującym się w tworzeniu nowoczesnych stron internetowych, aplikacji webowych oraz systemów dla firm. Każdy projekt tworzę od podstaw, dbając o szybkość, estetykę i wygodę użytkownika.
								</p>
							</div>

							<div className={css.aboutStack}>
								{MISSION_CARDS.map((card) => (
									<div className={css.aboutCard} key={card.id}>
										<h3>{card.title}</h3>
										<p>{card.description}</p>
									</div>
								))}
							</div>

							<div className={css.aboutBlock} id="features">
								<div className={css.aboutTitle}>
									<span className={css.aboutTag}>{'< why />'}</span>
									<h2>Dlaczego tobie warto ze mną współpracować?</h2>
								</div>
								<div className={css.featuresGrid}>
									{FEATURES.map((feature) => (
										<div className={css.aboutCard} key={feature.id}>
											<div className={css.iconBox}>
												{feature.icon}
											</div>
											<h3>{feature.title}</h3>
											<p>{feature.description}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* right column — proces współpracy */}
						<div className={css.processCol} id="process">
							<div className={css.aboutTitle}>
								<span className={css.aboutTag}>{'< process />'}</span>
								<h2>Jak wygląda nasza współpraca?</h2>
							</div>

							<div className={css.processFlow}>
								{PROCESS_STEPS.map((step, index) => (
									<>
										<div className={css.processStep} key={step.id}>
											<div className={css.processStepNum}>{step.id}</div>
											<h3>{step.title}</h3>
											<p>{step.description}</p>
										</div>
										{index < PROCESS_STEPS.length - 1 && (
											<span
												className={
													index % 2 === 0
														? css.flowArrow
														: `${css.flowArrow} ${css.flowArrowDown}`
												}
												key={`arrow-${step.id}`}
											>
												{index % 2 === 0 ? '→' : '↓'}
											</span>
										)}
									</>
								))}
							</div>

							<div className={css.aboutBlock} id="skills">
								<div className={css.aboutTitle}>
									<span className={css.aboutTag}>{'< stack />'}</span>
									<h2>Narzędzia, z którymi pracuję?</h2>
									<p>Korzystam z nowoczesnych technologii, które pozwalają tworzyć szybkie, bezpieczne i skalowalne aplikacje.</p>
								</div>
								<div className={css.stackGrid}>
									{STACK_PILLS.map((pill) => (
										<div className={css.stackPill} key={pill}>{pill}</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}
