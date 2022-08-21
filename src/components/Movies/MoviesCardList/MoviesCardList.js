import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from 'react';

const MoviesCardList = (props) => {
    console.log(props, "props");
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                {props.movies.map((movie) => {
                    return <MoviesCard nameRU={movie.nameRU} duration={movie.duration} image={movie.image} key={movie.id} />
                })}
            </div>
        </div>
    )
}

export default MoviesCardList;