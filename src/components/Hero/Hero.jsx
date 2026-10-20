import { Component } from 'react'
import css from '@/components/Hero/Hero.module.css'

const DOMAINS = [
	'twojafirma.pl',
	'restauracja.pl',
	'sklep-online.pl',
	'twojmarketing.pl',
]
const TYPING_SPEED = 80
const DELETING_SPEED = 45
const PAUSE_AFTER_TYPE = 1400
const PAUSE_AFTER_DELETE = 400

export class Hero extends Component {
	state = {
		domainText: '',
	}
	domainIndex = 0
	charIndex = 0
	deleting = false
	timeoutId = null

	componentDidMount() {
		this.timeoutId = setTimeout(this.typeLoop, TYPING_SPEED)
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId)
	}

	typeLoop = () => {
		const word = DOMAINS[this.domainIndex]

		if (!this.deleting) {
			this.charIndex++
			this.setState({ domainText: word.slice(0, this.charIndex) })

			if (this.charIndex === word.length) {
				this.deleting = true
				this.timeoutId = setTimeout(this.typeLoop, PAUSE_AFTER_TYPE)
				return
			}
		} else {
			this.charIndex--
			this.setState({ domainText: word.slice(0, this.charIndex) })

			if (this.charIndex === 0) {
				this.deleting = false
				this.domainIndex = (this.domainIndex + 1) % DOMAINS.length
				this.timeoutId = setTimeout(this.typeLoop, PAUSE_AFTER_DELETE)
				return
			}
		}

		this.timeoutId = setTimeout(
			this.typeLoop,
			this.deleting ? DELETING_SPEED : TYPING_SPEED
		)
	}

	render() {
		return (
			<>
				<section className={css.heroSection}>
					<div className={css.heroContainer}>
						<div className={css.heroAside}>
							<span className={css.heroTag}>{'< hero />'}</span>
							<h1 className={css.heroTitle}>
								Chcesz mieć własną stronę?
								<br />
								To dobry moment, żeby
								<span className={css.headerTitleGrad}>{' '}zacząć.</span>
							</h1>
							<p className={css.heroTiteDescription}>
								Projektuję i tworzę szybkie, responsywne strony internetowe oraz sklepy online. Każdy projekt dopasowuję indywidualnie do potrzeb i budżetu klienta.
							</p>
							<div className={css.heroButtons}>
								<a className={css.heroButtonStartProj} href="#contact">
									Rozpocznij projekt
								</a>
								<a className={css.heroButtonPortfolio} href="#work">
									Moje portfolio
								</a>
							</div>
							<div className={css.heroStats}>
								<div>
									<h2>4</h2>
									<p>zrealizowane projekty</p>
								</div>
								<div>
									<h2>2</h2>
									<p>specjalizacje: strony i sklepy</p>
								</div>
							</div>
						</div>
						<div className={css.heroBrowser}>
							<div className={css.heroBrowserBar}>
								<div className={css['browser-dots']}>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className={css['browser-address']}>
									<span>{this.state.domainText}</span>
									<span className={css.caret}></span>
								</div>
							</div>
							<div className={css.heroBrowserBody}>
								<div className={css['b-nav']}>
									<span className={css['b-line']}></span>
									<span className={css['b-line']}></span>
									<span className={css['b-line']}></span>
								</div>
								<div className={`${css['b-line']} ${css['b-hero-title']}`}></div>
								<div className={`${css['b-line']} ${css['b-hero-sub']}`}></div>
								<div className={css['b-btn']}></div>
								<div className={css['b-grid']}>
									<div className={css['b-card']}></div>
									<div className={css['b-card']}></div>
									<div className={css['b-card']}></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}