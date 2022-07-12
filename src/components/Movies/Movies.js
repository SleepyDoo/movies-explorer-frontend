import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from 'react';

const Movies = () => {
    return (
        <section className="movies">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
            <Footer />
        </section >
    )
}

export default Movies;