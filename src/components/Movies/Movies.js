import React from 'react';
import { useEffect } from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import "./Movies.css"

const Movies = (props) => {

    let{ allMovies } = props;

    const [showedMovies, setShowedMovies] = React.useState([]);
    const [currentAmount, setCurrentAmount] = React.useState(0);
    const [initialMovieNum, setinitialMovieNum] = React.useState(0);
    const [rise, setRise] = React.useState(3);
    const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(true);

    React.useEffect(() => {
        if (props.width >= 768) {
            setinitialMovieNum(12);
            setRise(3);
        }
        if (props.width < 768 && props.width >= 480) {
            setinitialMovieNum(8);
            setRise(2);
        }
        if (props.width < 480) {
            setinitialMovieNum(5);
            setRise(1);
        }
    }, [props.width]);


    function setMoviesToRender() {
        const num = Math.min(allMovies.length, initialMovieNum);
        setShowedMovies(allMovies.slice(0, num));
        setCurrentAmount(num);
    }

    const addRow = () => {
        console.log("addrow");
        const num = Math.min(allMovies.length, currentAmount + rise);
        console.log(num, "num");
        console.log(currentAmount, "cuur am");
        const next = allMovies.slice(currentAmount, num);
        setShowedMovies([...showedMovies, ...next]);
        setCurrentAmount(num);
        if (allMovies.length === num) {
            setIsMoreButtonVisible(false);
        }
      };

    useEffect(setMoviesToRender, [allMovies, initialMovieNum]);

    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList movies={showedMovies} />
            <MoreButton action={addRow} isOpen={isMoreButtonVisible} />
            <Preloader />

        </section >
    )
}

export default Movies;