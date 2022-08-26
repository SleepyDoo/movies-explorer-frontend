import React from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import MoreButton from "./MoreButton/MoreButton";
// import { fixMovieData, filterMovies } from '../../utils/MoviesParser';
import "./Movies.css"

const Movies = (props) => {

    let { saveMovie } = props;
    
    const [showedMovies, setShowedMovies] = React.useState([]);
    const [currentAmount, setCurrentAmount] = React.useState(0);
    const [initialMovieNum, setinitialMovieNum] = React.useState(0);
    const [rise, setRise] = React.useState(3);
    const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(true);
    const [filteredData, setFilteredData] = React.useState([]);
    const [notFound, setNotFound] = React.useState(false);

    

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

    React.useEffect(() => {
        if (filteredData.length < initialMovieNum) {
            setIsMoreButtonVisible(false);
        } else {
            setIsMoreButtonVisible(true);
        }

        if (filteredData.length > 0) {
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }, [filteredData.length, initialMovieNum]);

    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem("filteredFilms"));
        if (movies) {
            setFilteredData(movies.films);
        }
    }, [])

    function setMoviesToRender() {
        const num = Math.min(filteredData.length, initialMovieNum);
        setShowedMovies(filteredData.slice(0, num));
        setCurrentAmount(num);
    }

    const addRow = () => {
        const num = Math.min(filteredData.length, currentAmount + rise);
        const next = filteredData.slice(currentAmount, num);
        setShowedMovies([...showedMovies, ...next]);
        setCurrentAmount(num);
        if (filteredData.length === num) {
            setIsMoreButtonVisible(false);
        }
      };

    React.useEffect(setMoviesToRender, [filteredData, initialMovieNum]);

    

    return (
        <section className="movies">
            <SearchForm setFilterToData={setFilteredData} />
            {notFound ? <p className="movies__not-found movies__not-found_visible">Фильмы не найдены</p> : null}
            <MoviesCardList movies={showedMovies} saveMovie={saveMovie} deleteSavedMovie={props.deleteSavedMovie} />
            {isMoreButtonVisible ? <MoreButton action={addRow} /> : null}
        </section >
    )
}

export default Movies;