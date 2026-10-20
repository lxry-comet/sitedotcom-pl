import { Component } from 'react'
import css from './Contact.module.css'

const CONTACT_CARDS = [
	{
		id: 'email',
		title: 'Email',
		value: 'sitedotcom.support@gmail.com',
		href: 'mailto:sitedotcom.support@gmail.com',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="5" width="18" height="14" rx="2" />
				<path d="M3 7l9 6 9-6" />
			</svg>
		),
	},
	{
		id: 'telegram',
		title: 'Telegram',
		value: '@sitedotcom_dev',
		href: 'https://t.me/sitedotcom_dev',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 4L3 11.5l6 2.2m12-9.7l-3.3 16-6.7-5m10-11l-10 9.3" />
			</svg>
		),
	},
	// {
	// 	id: 'github',
	// 	title: 'GitHub',
	// 	value: 'github.com/sitedotcom',
	// 	icon: (
	// 		<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
	// 			<path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
	// 			<rect x="3" y="8" width="18" height="12" rx="2" />
	// 			<path d="M3 13h18" />
	// 		</svg>
	// 	),
	// },
	{
		id: 'dostepnosc',
		title: 'Dostępność',
		value: 'Wieczorami w dni robocze i w weekendy',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="8.5" />
				<path d="M12 7.5V12l3 2" />
			</svg>
		),
	},
]

export class Contact extends Component {
	state = {
		status: 'idle', // 'idle' | 'sending' | 'sent'
	}


	render() {
		const { form, status } = this.state

		return (
			<>
				<section id="contact">
					<div className={css.contactContainer}>
						<div className={css.contactTitle}>
							<span className={css.contactTag}>{'< contact />'}</span>
							<h2>Przeczytałeś? Napisz do mnie i porozmawiamy o twoim projekcie</h2>
							<p>Napisz do mnie, a przygotuję bezpłatną wycenę Twojego projektu. Odpowiadam zwykle w ciągu 24 godzin.</p>
						</div>

						<div className={css.contactWrapper}>
							<div className={css.contactInfo}>
								{CONTACT_CARDS.map((card) => {
									const content = (
										<>
											<div className={css.contactIcon}>{card.icon}</div>
											<div>
												<h3>{card.title}</h3>
												<p>{card.value}</p>
											</div>
										</>
									)

									return card.href ? (
										<a className={css.contactCard} href={card.href} key={card.id}>
											{content}
										</a>
									) : (
										<div className={css.contactCard} key={card.id}>
											{content}
										</div>
									)
								})}
							</div>

							<form className={css.contactForm} onSubmit={this.handleSubmit}>
								<div className={css.formRow}>
									<input
										type="text"
										placeholder="Imię i nazwisko"
										required
									/>
									<input
										type="email"
										placeholder="Adres e-mail"
										required
									/>
								</div>
								<input
									className={css.formTopic}
									type="text"
									placeholder="Temat projektu"
								/>
								<textarea
									placeholder="Opisz swój projekt..."
									required
								/>
								<button
									className={css.formButton}
									type="submit"
								>
									Wyślij wiadomość
								</button>
							</form>
						</div>
					</div>
				</section>
			</>
		)
	}
}
