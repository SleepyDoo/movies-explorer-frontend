import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
import React from 'react';
import "./Movies.css"

const Movies = () => {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
        </section >
    )
}

export default Movies;