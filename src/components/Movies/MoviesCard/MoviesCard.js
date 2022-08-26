import "./MoviesCard.css"
import React from 'react';
import { fixMovieDuraton, fixMovieImageAndId } from "../../../utils/MoviesParser";

const MoviesCard = (props) => {

    const savedMoviesfromStorage = JSON.parse(localStorage.getItem("savedMovies"));
    const withFixedImg = fixMovieImageAndId(props.allData);
    const fixedMovie = fixMovieDuraton(withFixedImg);
    
    const checkIsMovieAdded = () => {
        
        const newData = savedMoviesfromStorage.some((element) => {
            // console.log(element.movieId, "element id");
            // console.log(props.allData.id, "all data id");
            // console.log(savedMoviesfromStorage.some((element) => element.movieId === props.allData.id), "isAdded");
            return element.movieId === props.allData.id
        })
        return newData;
    }

    let isMovieAdded = checkIsMovieAdded();

    function handleLikeButton() {
        // console.log(props.allData, "allData")
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