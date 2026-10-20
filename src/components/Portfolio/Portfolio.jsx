import { Component } from 'react'
import css from './Portfolio.module.css'

const FILTERS = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'www', label: 'Strony' },
  { id: 'sklep', label: 'Sklepy' },
]

const PROJECTS = [
  {
    id: 'sklep-1',
    category: 'sklep',
    address: 'https://brandtopsneakers.pl/',
    title: 'Brand Top Sneakers',
    stack: 'React • Supabase • Stripe',
    description: 'W pełni funkcjonalny sklep internetowy ze sneakersami z dedykowanym backendem, autoryzacją i integracją płatności online.',
    image: 'brand-top-sneakers.png',
  },
  {
    id: 'projekt-1',
    category: 'www',
    address: 'https://apple-gsm.pl/',
    title: 'iPhone Serwis',
    stack: 'React • CSS Modules',
    description: 'Nowoczesna strona wizerunkowa dla serwisu urządzeń Apple, zaprojektowana z myślą o wysokiej konwersji i szybkim ładowaniu.',
    image: 'apple-gsm.png',
		
	},
{
    id: 'projekt-2',
    category: 'www', 
    address: 'https://github.io/harmony-of-nails/',
    title: 'Harmony of Nails',
    stack: 'React • CSS Modules', 
    description: 'Elegancka strona wizerunkowa dla salonu, z przejrzystą prezentacją usług i cennikiem.',
    image: 'harmony-of-nails.png', 
  },
]

export class Portfolio extends Component {
  state = {
    filter: 'all',
  }

  handleFilterClick = (filterId) => {
    this.setState({ filter: filterId })
  }

  render() {
    const { filter } = this.state
    const visibleProjects = PROJECTS.filter(
      (project) => filter === 'all' || project.category === filter
    )
    return (
      <>
        <section id="work">
          <div className={css.portfolioContainer}>
            <div className={css.portfolioTitle}>
              <span className={css.portfolioTag}>{'< work />'}</span>
              <h2>Co mogę tobie pokazać?</h2>
            </div>

            <div className={css.portfolioFilter}>
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  className={filter === f.id ? css.filterActive : ''}
                  onClick={() => this.handleFilterClick(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className={css.portfolioGrid}>
              {visibleProjects.map((project) => (
                /* 1. ГЛАВНОЕ ИЗМЕНЕНИЕ: Вся карточка теперь ссылка <a>, а не <div> */
                <a 
                  href={project.address} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={css.project} 
                  key={project.id}
                  style={{ textDecoration: 'none', color: 'inherit' }} // Убираем синий цвет и подчеркивание браузера
                >
                  
                  {/* Шапка "браузера" карточки остается */}
                  <div className={css.projectBar}>
                    <div className={css.projectDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={css.projectAddress}>{project.address}</div>
                  </div>

                  {/* 2. ИЗМЕНЕНИЕ: Заменяем пустой блок на картинку */}
                  <div className={css.projectThumb}>
                     {project.image ? (
                       <img 
                         src={`${import.meta.env.BASE_URL}${project.image}`} 
                         alt={project.title} 
                         className={css.projectImage} 
                       />
                     ) : (
                       /* Если картинки нет, показываем пустой блок из css.projectThumb как запасной вариант */
                       <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, #e0c3fc 0%, #8ec5fc 100%)' }}></div>
                     )}
                  </div>

                  {/* Контент карточки */}
                  <div className={css.projectContent}>
                    <h3>{project.title}</h3>
                    
                    <p className={css.projectStack}>
                      <strong>Stack:</strong> {project.stack}
                    </p>
                    
                    {project.description && (
                      <p className={css.projectDesc}>{project.description}</p>
                    )}

                    {/* 3. ИЗМЕНЕНИЕ: Тег <a> заменен на <span> */}
                    <span className={css.projectLink}>
                      Zobacz projekt →
                    </span>
                  </div>

                </a>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
}