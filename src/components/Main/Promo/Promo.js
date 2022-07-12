import "./Promo.css"
import React from 'react';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <div>
                    <h1 className="promo__heading">Учебный проект студента факультета <br /> Веб-разработки.</h1>
                    <h4 className="promo__subheading">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h4>
                </div>
                <div className="promo__logo"></div>
            </div>
            <button className="promo__button">Узнать больше</button> 
            {/* В планах наладить работу кнопки на js */}
        </section>
        
    )
}

export default Promo;