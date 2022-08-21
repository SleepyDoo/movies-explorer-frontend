import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from 'react';

const MoviesCardList = () => {
    return (
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
        </div>
    )
}

export default MoviesCardList;