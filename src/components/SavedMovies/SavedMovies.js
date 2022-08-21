import React from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
import Preloader from '../Preloader/Preloader';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import "../Movies/Movies.css";

const Movies = () => {

    const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
    const [isPreloaderOpened, setIsPreloaderOpened] = React.useState(false);

    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
            <ErrorPopup error="вы ошиблdsds dsdssds dsddsds dsdsdsdись" isOpen={isErrorPopupOpened} />
            <Preloader isOpen={isPreloaderOpened} />
        </section >
    )
}

export default Movies;