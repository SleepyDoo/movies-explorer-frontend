import "./AboutMe.css"
import React from 'react';
import myPhoto from "../../../images/photo.jpg"

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="main__heading-container">
                <h2 className="main__subheading">Студент</h2>
            </div>
            <div className="aboutMe__container">
                <p className="aboutMe__name">Вика</p>
                <p className="aboutMe__post">Фронтенд-разработчик, 20 лет</p>
                <p className="aboutMe__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className="aboutMe__links">
                    <a className="aboutMe__link" href="https://t.me/sleepydoo">Telegram</a>
                    <a className="aboutMe__link" href="https://github.com/SleepyDoo">Github</a>
                </div>
                <img className="aboutMe__photo" alt="Виктория" src={myPhoto}></img>
            </div>
        </div>
    )
}

export default AboutMe;