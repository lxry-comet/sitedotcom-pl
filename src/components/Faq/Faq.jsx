import { Component } from 'react'
import css from './Faq.module.css'

const QUESTIONS = [
	{
		id: 'koszt',
		question: 'Ile kosztuje strona?',
		answer: 'Każdy projekt wyceniam indywidualnie w zależności od funkcji.',
	},
	{
		id: 'czas',
		question: 'Jak długo trwa realizacja?',
		answer: 'Od 3 do 14 dni w zależności od projektu.',
	},
	{
		id: 'poprawki',
		question: 'Czy poprawki są w cenie?',
		answer: 'Tak, oferuję darmowe poprawki po wdrożeniu.',
	},
	{
		id: 'edycja',
		question: 'Czy mogę później edytować stronę?',
		answer: 'W przypadku sklepu na Shopify — tak, treści i produkty edytujesz samodzielnie. W przypadku strony na React drobne zmiany wprowadzam ja w ramach wsparcia po wdrożeniu.',
	},
]

export class Faq extends Component {
	state = {
		openId: null,
	}

	toggleQuestion = (id) => {
		this.setState((prevState) => ({
			openId: prevState.openId === id ? null : id,
		}))
	}

	render() {
		const { openId } = this.state

		return (
			<>
				<section id="faq">
					<div className={css.faqContainer}>
						<div className={css.faqTitle}>
							<span className={css.faqTag}>{'< faq />'}</span>
							<h2>Może masz jakieś pytania?</h2>
						</div>

						<div className={css.faqList}>
							{QUESTIONS.map((item) => {
								const isOpen = openId === item.id
								return (
									<div
										className={isOpen ? `${css.question} ${css.questionOpen}` : css.question}
										key={item.id}
										onClick={() => this.toggleQuestion(item.id)}
									>
										<div className={css.questionHead}>
											<h3>{item.question}</h3>
											<span className={css.plus}>+</span>
										</div>
										{isOpen && <p>{item.answer}</p>}
									</div>
								)
							})}
						</div>
					</div>
				</section>
			</>
		)
	}
}
