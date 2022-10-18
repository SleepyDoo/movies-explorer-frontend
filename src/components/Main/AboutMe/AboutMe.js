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
                <p className="about-me__paragraph">Я родилась и живу в Москве. После двух лет учебы на направлении "Менеджмент" увлеклась программированием, прошла курс по веб-разработке и сменила место учебы.
                    Сейчас учусь на первом курсе ПМГМУ им. Сеченево на специальности "Интеллектуальные системы в гуманитарной сфере". Так же, в апреле 2022 года, по результатам отборочного интенсива, прошла в школу 21.
                    За несколько месяцев обучения я написала ряд проектов на языке программирования С, в том числе групповых. В группах по 4-5 человек мы имплементирвали некоторые стандартные библиотеки, а также написали свою собственную.
                    В дальнейшем в школе планируется изучать С++, DevOps и языки программирования по выбору.
                    Имею базовые навыки управления системой через консоль, знакома с Linux (manjaro, ubuntu).
                    Есть опыт использование Figma, Adobe Photoshop, Adobe Ilustator.
                    Ниже можно найти ссылки на написанные мной проекты.</p>
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