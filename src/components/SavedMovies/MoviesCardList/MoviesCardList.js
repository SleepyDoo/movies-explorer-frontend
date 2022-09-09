import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import { fixMovieDuraton } from "../../../utils/MoviesParser";
import React from 'react';

const MoviesCardList = (props) => {

    const fixedData = props.movies.map(fixMovieDuraton);

    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                {fixedData.map((movie) => {
                    return <MoviesCard movie={movie} key={movie.movieId} onDelete={props.deleteSavedMovie} deleteFromFiltered={props.deleteFromFiltered} />
                })}
            </div>
        </div>
    )
}

export default MoviesCardList;