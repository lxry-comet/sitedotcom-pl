import { Component, createRef } from 'react'
import css from './Results.module.css'

const STATS = [
	{ id: 'projekty', target: 4, label: 'Zrealizowanych projektów' },
	{ id: 'klienci', target: 4, label: 'Zadowolonych klientów' },
]
const COUNT_DURATION_MS = 1200
const COUNT_STEP_MS = 20

export class Results extends Component {
	sectionRef = createRef()
	observer = null

	state = {
		counts: STATS.map(() => 0),
	}

	componentDidMount() {
		this.observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					this.startCounting()
					this.observer.disconnect()
				}
			},
			{ threshold: 0.4 }
		)
		if (this.sectionRef.current) {
			this.observer.observe(this.sectionRef.current)
		}
	}

	componentWillUnmount() {
		if (this.observer) {
			this.observer.disconnect()
		}
		if (this.intervalId) {
			clearInterval(this.intervalId)
		}
	}

	startCounting = () => {
		const steps = COUNT_DURATION_MS / COUNT_STEP_MS
		let currentStep = 0

		this.intervalId = setInterval(() => {
			currentStep++
			const progress = Math.min(currentStep / steps, 1)

			this.setState({
				counts: STATS.map((stat) => Math.floor(stat.target * progress)),
			})

			if (progress === 1) {
				clearInterval(this.intervalId)
			}
		}, COUNT_STEP_MS)
	}

	render() {
		return (
			<>
				<section id="results" ref={this.sectionRef}>
					<div className={css.resultsContainer}>
						<div className={css.resultsTitle}>
							<span className={css.resultsTag}>{'< results />'}</span>
							<h2>Zobacz, ile już zrobiłem</h2>
						</div>

						<div className={css.resultsGrid}>
							{STATS.map((stat, index) => (
								<div className={css.resultsStat} key={stat.id}>
									<div className={css.resultsCount}>{this.state.counts[index]}</div>
									<p>{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</>
		)
	}
}
