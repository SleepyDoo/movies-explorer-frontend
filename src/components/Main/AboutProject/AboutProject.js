import "./AboutProject.css"
import React from 'react';

const AboutProject = () => {
    return (
        <div className="aboutProject" id="about-project">
            <div className="main__heading-container">
                <h2 className="main__subheading">О проекте</h2>
            </div>
            <div className="aboutProject__table">
                <div className="aboutProject__element">
                    <h3 className="aboutProject__element-heading">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__element-subheading">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__element">
                    <h3 className="aboutProject__element-heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__element-subheading">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__line-container">
                <div className="aboutProject__backend-line">
                    <p className="aboutProject__duration">1 неделя</p>
                </div>
                <div className="aboutProject__frontend-line">
                <p className="aboutProject__duration aboutProject__duration_type_front">4 недели</p>
                </div>
                <p className="aboutProject__label">Back-end</p>
                <p className="aboutProject__label">Front-end</p>
            </div>
        </div>
    )
}

export default AboutProject;