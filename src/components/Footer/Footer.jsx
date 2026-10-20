import { Component } from 'react'
import css from './Footer.module.css'

const NAV_LINKS = [
	{ label: 'O mnie', href: '#about' },
	{ label: 'Usługi', href: '#services' },
	{ label: 'Portfolio', href: '#work' },
	{ label: 'Kontakt', href: '#contact' },
]

const SERVICE_LINKS = [
	{ label: 'Landing Page', href: '#services' },
	{ label: 'Strona firmowa', href: '#services' },
	{ label: 'Sklepy internetowe', href: '#services' },
	{ label: 'Modernizacja stron', href: '#services' },
]

const SOCIAL_LINKS = [
	{ label: 'GitHub', href: '#' },
	{ label: 'LinkedIn', href: '#' },
	{ label: 'Telegram', href: '#' },
]

export class Footer extends Component {
	render() {
		return (
			<>
				<footer>
					<div className={css.footerContainer}>
						<div className={css.footerAbout}>
							<div className={css.footerLogo}>
								<div className={css.footerLogoItem}>{'</>'}</div>
								<span className={css.footerLogoSDC}>SiteDotCom
									<span className={css.footerLogoDot}>.pl</span>
								</span>
							</div>
							<p>Nowoczesne strony internetowe, aplikacje webowe oraz rozwiązania dla biznesu.</p>
						</div>

						<div>
							<h3>Nawigacja</h3>
							{NAV_LINKS.map((link) => (
								<a href={link.href} key={link.label}>{link.label}</a>
							))}
						</div>

						<div>
							<h3>Usługi</h3>
							{SERVICE_LINKS.map((link) => (
								<a href={link.href} key={link.label}>{link.label}</a>
							))}
						</div>

						<div>
							<h3>Social Media</h3>
							{SOCIAL_LINKS.map((link) => (
								<a href={link.href} key={link.label}>{link.label}</a>
							))}
						</div>
					</div>
					<div className={css.copyright}>© 2026 SiteDotCom.pl. Wszelkie prawa zastrzeżone.</div>
				</footer>
			</>
		)
	}
}
