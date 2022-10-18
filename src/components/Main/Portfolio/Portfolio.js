import "./Portfolio.css"
import React from 'react';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <ul className="portfolio__container">
                <li>
                    <a className="portfolio__link-container" href="https://github.com/SleepyDoo/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Статичный сайт</p>
                        <div className="portfolio__arrow"></div>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container" href="https://github.com/SleepyDoo/russian-travel" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Адаптивный сайт</p>
                        <div className="portfolio__arrow"></div>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container portfolio__link-container" href="https://github.com/SleepyDoo/react-mesto-api-full" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">Одностраничное приложение</p>
                        <div className="portfolio__arrow" />
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container portfolio__link-containerr" href="https://github.com/SleepyDoo/s21_math" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">s21_math.h</p>
                        <div className="portfolio__arrow" />
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container portfolio__link-container" href="https://github.com/SleepyDoo/s21_string" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">s21_string.h</p>
                        <div className="portfolio__arrow" />
                    </a>
                </li>
                <li>
                    <a className="portfolio__link-container portfolio__link-container_no-border" href="https://github.com/SleepyDoo/SimpleBashUtils21" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-name">SimpleBashUtils</p>
                        <div className="portfolio__arrow" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;