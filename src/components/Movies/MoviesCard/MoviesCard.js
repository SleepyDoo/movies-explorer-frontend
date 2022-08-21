import "./MoviesCard.css"
import React from 'react';

const MoviesCard = (props) => {
    const { nameRU, image, duration } = props;
    return (
        <div className="movies-card">
            <img className="movies-card__img" alt="qwerty" src={image} />
            <div className="movies-card__container">
                <p className="movies-card__film-name">{nameRU}</p>
                <p className="movies-card__duration">{duration}</p>
                <button className="movies-card__like-button" type="button"/>
            </div>
        </div>
    )
}
export default MoviesCard;