import photo from "../../../images/movie1.svg"
import "./MoviesCard.css"
import React from 'react';

const MoviesCard = () => {
    return (
        <div className="movies-card">
            <img className="movies-card__img" alt="qwerty" src={photo} />
            <div className="movies-card__container">
                <p className="movies-card__film-name">Qwerty</p>
                <p className="movies-card__duration">1z 23x</p>
                <button className="movies-card__like-button" />
            </div>
        </div>
    )
}
export default MoviesCard;