import { Component } from 'react'
import './App.css'

import { Header } from '@/components/Header/Header.jsx'
import { Hero } from '@/components/Hero/Hero.jsx'
import { Services } from '@/components/Services/Services.jsx'
import { AboutProcess } from '@/components/AboutProcess/AboutProcess.jsx'
import { Portfolio } from '@/components/Portfolio/Portfolio.jsx'
import { Results } from '@/components/Results/Results.jsx'
import { Faq } from '@/components/Faq/Faq.jsx'
import { Contact } from '@/components/Contact/Contact.jsx'
import { Footer } from '@/components/Footer/Footer.jsx'

export class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Hero />
				<Services />
				<AboutProcess />
				<Portfolio />
				<Results />
				<Faq />
				<Contact />
				<Footer />
			</>
		)
	}
}