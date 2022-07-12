import "./AboutProject.css"
import React from 'react';

const AboutProject = () => {
    return (
        <section className="about-project" id="about-project">
            <div className="main__heading-container">
                <h2 className="main__subheading">О проекте</h2>
            </div>
            <div className="about-project__table">
                <div className="about-project__element">
                    <h3 className="about-project__element-heading">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__element-subheading">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__element">
                    <h3 className="about-project__element-heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__element-subheading">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__line-container">
                <div className="about-project__backend-line">
                    <p className="about-project__duration">1 неделя</p>
                </div>
                <div className="about-project__frontend-line">
                <p className="about-project__duration about-project__duration_type_front">4 недели</p>
                </div>
                <p className="about-project__label">Back-end</p>
                <p className="about-project__label">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;