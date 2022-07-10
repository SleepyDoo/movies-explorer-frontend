import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
import React from 'react';

const Movies = () => {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
        </div>
    )
}

export default Movies;