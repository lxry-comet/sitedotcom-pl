import { Component } from 'react'
import css from './Header.module.css'

const NAV_LINKS = [
	{ label: 'Co mogę zrobić', href: '#services' },
	{ label: 'O mnie', href: '#about' },
	{ label: 'Portfolio', href: '#work' },
]

export class Header extends Component {
	render() {
		return (
			<>
				<header>
					<div className={css.headerContainer}>
						<div className={css.headerLogo}>
							<div className={css.headerLogoItem}>
								{'</>'}
							</div>
							<span className={css.headerLogoSDC}>SiteDotCom
								<span className={css.headerLogoDot}>.pl</span>
							</span>
						</div>
						<nav className={css.headerNavElements}>
							<ul className={css.headerNavMenu}>
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<a href={link.href}>{link.label}</a>
									</li>
								))}
							</ul>
						</nav>
						<div className={css.headerUserLog}>
							<a className={css.headerUserAcc} href="#contact">
								{'Napisz do mnie'}
							</a>
						</div>
					</div>
				</header>
			</>
		)
	}
}