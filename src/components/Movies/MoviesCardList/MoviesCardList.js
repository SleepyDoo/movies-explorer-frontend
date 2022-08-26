import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from 'react';

const MoviesCardList = (props) => {
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                {props.movies.map((movie) => {
                    return <MoviesCard allData={movie} onLike={props.saveMovie} key={movie.id} deleteSavedMovie={props.deleteSavedMovie} />
                })}
            </div>
        </div>
    )
}

export default MoviesCardList;