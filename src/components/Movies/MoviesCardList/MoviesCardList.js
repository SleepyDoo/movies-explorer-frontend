import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
import React from 'react';
// import Preloader from "../../Preloader/Preloader";

const MoviesCardList = () => {
    return (
        <div className="movies-card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            {/* <div className="movies-card-list__preloader">
                <Preloader />
            </div> */}
        </div>
    )
}

export default MoviesCardList;