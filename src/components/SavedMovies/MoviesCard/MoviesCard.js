import "./MoviesCard.css"
import React from 'react';

const MoviesCard = (props) => {
    const { movie, deleteFromFiltered, onDelete } = props;

    function handleDelete() {
        onDelete(movie, deleteFromFiltered);
    }

    return (
        <div className="movies-card">
            <a href={movie.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
                <img className="movies-card__img" alt={movie.nameRU} src={movie.image} />
            </a>
            <div className="movies-card__container">
                <p className="movies-card__film-name">{movie.nameRU}</p>
                <p className="movies-card__duration">{movie.duration}</p>
                <button className="movies-card__delete-button" type="button" onClick={handleDelete} />
            </div>
        </div>
    )
}
export default MoviesCard;