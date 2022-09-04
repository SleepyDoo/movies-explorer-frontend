import "./MoviesCard.css"
import React from 'react';
import { fixMovieDuraton, fixMovieImageAndId } from "../../../utils/MoviesParser";

const MoviesCard = (props) => {

    const savedMoviesfromStorage = JSON.parse(localStorage.getItem("savedMovies"));
    const withFixedImg = fixMovieImageAndId(props.allData);
    const fixedMovie = fixMovieDuraton(withFixedImg);
    
    const checkIsMovieAdded = () => {
        if (savedMoviesfromStorage) {
            const newData = savedMoviesfromStorage.some((element) => {
                return element.movieId === props.allData.id
            })
            return newData;
        }
    }

    let isMovieAdded = checkIsMovieAdded();

    function handleLikeButton() {
        if (!isMovieAdded) {
            props.onLike(withFixedImg);  
            isMovieAdded = true;
        } else {
            props.deleteSavedMovie(props.allData);
            isMovieAdded = false;
        }
    }

    React.useEffect(() => {
        
    })

    return (
        <div className="movies-card">
            <a href={fixedMovie.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
                <img className="movies-card__img" alt={fixedMovie.nameRU} src={fixedMovie.image} />
            </a>
            <div className="movies-card__container">
                <p className="movies-card__film-name">{fixedMovie.nameRU}</p>
                <p className="movies-card__duration">{fixedMovie.duration}</p>
                <button className={`${isMovieAdded ? "movies-card__like-button_active" : "movies-card__like-button"}`}
                    type="button"
                    onClick={handleLikeButton} />
            </div>
        </div>
    )
}
export default MoviesCard;