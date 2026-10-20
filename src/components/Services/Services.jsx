import { Component } from 'react'
import css from './Services.module.css'

const SERVICES = [
	{
		id: 'landing',
		title: 'Landing Page',
		description: 'Nowoczesna strona sprzedażowa zaprojektowana pod konwersję.',
		bullets: [
			'Jedna sekcja = jeden cel: kontakt, zapis lub zakup.',
			'Copywriting i układ treści przygotowane pod Twoją ofertę.',
			'Formularz, integracja z e-mailem i podstawowa analityka.',
			'Optymalizacja szybkości i wersja mobilna w cenie.',
		],
		meta: [
			'3–7 dni', 
			'1 strona', 
			'A/B ready'
		],
	},
	{
		id: 'strona-firmowa',
		title: 'Strona firmowa',
		description: 'Profesjonalna wizytówka dla Twojej firmy.',
		bullets: [
			'Od 4 do 10 podstron: oferta, o firmie, cennik, kontakt.',
			// 'Panel do samodzielnej edycji treści i zdjęć.',
			'Konfiguracja SEO, Mapy Google i danych firmy.',
			'Certyfikat SSL, domena i hosting — konfiguruję za Ciebie.',
		],
		meta: [
			'5–10 dni', 
			// 'CMS', 
			'SEO'
		],
	},
	// {
	// 	id: 'sklep',
	// 	title: 'Sklep internetowy',
	// 	description: 'Nowoczesny sklep online z panelem administracyjnym.',
	// 	bullets: [
	// 		'Katalog produktów, warianty, magazyn i kody rabatowe.',
	// 		'Płatności online: Przelewy24, BLIK, Stripe.',
	// 		'Integracja z kurierami i automatyczne statusy zamówień.',
	// 		'Panel sprzedaży z raportami i eksportem faktur.',
	// 	],
	// 	meta: ['2–4 tyg.', 'Płatności', 'Panel'],
	// },
	// {
	// 	id: 'react-app',
	// 	title: 'Aplikacje React',
	// 	description: 'Interaktywne aplikacje dla biznesu.',
	// 	bullets: [
	// 		'Dashboardy, kalkulatory, systemy rezerwacji i CRM.',
	// 		'Logowanie, role użytkowników i bezpieczne API.',
	// 		'Dane na żywo, wykresy i eksport do Excela/PDF.',
	// 		'Kod komponentowy — łatwo dodać nowe funkcje później.',
	// 	],
	// 	meta: ['od 2 tyg.', 'React', 'API'],
	// },
	// {
	// 	id: 'telegram-bot',
	// 	title: 'Telegram Bot',
	// 	description: 'Automatyzacja procesów oraz obsługi klientów.',
	// 	bullets: [
	// 		'Automatyczne odpowiedzi i menu obsługi klienta 24/7.',
	// 		'Powiadomienia o zamówieniach i formularzach na czacie.',
	// 		'Zbieranie zgłoszeń, zapisów i rezerwacji bez strony www.',
	// 		'Panel administratora i statystyki rozmów.',
	// 	],
	// 	meta: ['3–7 dni', 'Node.js', '24/7'],
	// },
	{
		id: 'modernizacja',
		title: 'Modernizacja stron',
		description: 'Odświeżenie wyglądu, optymalizacja i nowe funkcje.',
		bullets: [
			'Audyt szybkości, SEO i wersji mobilnej z listą poprawek.',
			'Nowy design bez utraty pozycji w Google.',
			'Przyspieszenie ładowania: obrazy, kod, cache.',
			'Dodanie brakujących funkcji: blog, formularze, płatności.',
		],
		meta: [
			'2–5 dni', 
			'Audyt', 
			'Bez utraty SEO'
		],
	},
]

export class Services extends Component {
	render() {
		return (
			<>
				<section id="services">
					<div className={css.servicesContainer}>
						<div className={css.servicesTitle}>
							<span className={css.servicesTag}>{'< services />'}</span>
							<h2>Co mogę tobie zaproponować?</h2>
							<p>Najedź kursorem na okienko, aby zobaczyć szczegóły.</p>
						</div>

						<div className={css.servicesCard}>
							{SERVICES.map((service) => (
								<div className={css.servicesList} tabIndex={0} key={service.id}>
									<h3>{service.title}</h3>
									<p>{service.description}</p>
									<div className={css.servicesMore}>
										<div className={css.servicesMoreInner}>
											<div className={css.servicesMoreContent}>
												<ul className={css.servicesListDescription}>
													{service.bullets.map((bullet, index) => (
														<li key={index}>{bullet}</li>
													))}
												</ul>
												<div className={css.servicesMeta}>
													{service.meta.map((item, index) => (
														<span key={index}>{item}</span>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</>
		)
	}
}