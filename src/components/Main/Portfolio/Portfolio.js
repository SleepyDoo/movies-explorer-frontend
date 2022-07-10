import "./Portfolio.css"
import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="portfolio__heading">Портфолио</h2>
            <div className="portfolio__container">
                <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories">
                    <p className="portfolio__link-name">Статичный сайт</p>
                    <div className="portfolio__arrow"></div>
                </a>
                <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories">
                    <p className="portfolio__link-name">Адаптивный сайт</p>
                    <div className="portfolio__arrow"></div>
                </a>
                <a className="portfolio__link-container" href="https://github.com/SleepyDoo?tab=repositories">
                    <p className="portfolio__link-name">Одностраничное приложение</p>
                    <div className="portfolio__arrow"></div>
                </a>
            </div>
        </div>
    )
}

export default Portfolio;