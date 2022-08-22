import "./MoviesCard.css"
import React from 'react';

const MoviesCard = (props) => {
    const { nameRU, image, duration, trailerLink } = props;
    return (
        <div className="movies-card">
            <a href={trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
                <img className="movies-card__img" alt={nameRU} src={image} />
            </a>
            <div className="movies-card__container">
                <p className="movies-card__film-name">{nameRU}</p>
                <p className="movies-card__duration">{duration}</p>
                <button className="movies-card__like-button" type="button"/>
            </div>
        </div>
    )
}
export default MoviesCard;