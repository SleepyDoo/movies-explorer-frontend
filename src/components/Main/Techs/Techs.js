import "./Techs.css"
import React from 'react';

const Techs = () => {
    return (
        <div className="techs">
            <div className="main__heading-container">
                <h2 className="main__subheading">Технологии</h2>
            </div>
            <h3 className="techs__subheading">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__container">
                <div className="techs__card">
                    <p className="techs__card-name">HTML</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">CSS</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">JS</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">React</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">Git</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">Express.js</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-name">MongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default Techs;