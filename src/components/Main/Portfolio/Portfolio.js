import "./Portfolio.css"
import React from 'react';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <ul className="portfolio__container">
                <li>
                    <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Статичный сайт</p>
                        <div className="portfolio__arrow"></div>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Адаптивный сайт</p>
                        <div className="portfolio__arrow"></div>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Одностраничное приложение</p>
                        <div className="portfolio__arrow" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;