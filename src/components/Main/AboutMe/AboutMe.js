import "./AboutMe.css"
import React from 'react';
import myPhoto from "../../../images/photo.jpg"

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="main__heading-container">
                <h2 className="main__subheading">Студент</h2>
            </div>
            <div className="about-me__container">
                <p className="about-me__name">Вика</p>
                <p className="about-me__post">Фронтенд-разработчик, 20 лет</p>
                <p className="about-me__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className="about-me__links">
                    <a className="about-me__link" href="https://t.me/sleepydoo" target="_blank" rel="noreferrer">Telegram</a>
                    <a className="about-me__link" href="https://github.com/SleepyDoo" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__photo" alt="Виктория" src={myPhoto}></img>
            </div>
        </section>
    )
}

export default AboutMe;