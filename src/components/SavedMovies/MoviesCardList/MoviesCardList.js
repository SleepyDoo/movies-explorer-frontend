import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from 'react';
import { fixMovieData } from "../../../utils/MoviesParser";

const MoviesCardList = (props) => {

    const moviesToRender = props.movies.map(fixMovieData);

    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                {moviesToRender.map((movie) => {
                    return <MoviesCard nameRU={movie.nameRU} duration={movie.duration} image={movie.image} key={movie.id} />
                })}
            </div>
        </div>
    )
}

export default MoviesCardList;