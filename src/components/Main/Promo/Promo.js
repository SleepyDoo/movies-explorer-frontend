import "./Promo.css"
import React from 'react';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__logo" />
                <div className="promo__sub-container">
                    <h1 className="promo__heading">Учебный проект студента факультета <br /> Веб-разработки.</h1>
                    <h4 className="promo__subheading">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h4>
                </div>
                
            </div>
            <a className="promo__link-container" href="#about-project">
                <p className="promo__link">Узнать больше</p> 
            </a>
        </section>
        
    )
}

export default Promo;