import React from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import "../Movies/Movies.css";

const Movies = (props) => {

    const moviesFromStorage = JSON.parse(localStorage.getItem("savedMovies"));

    const [filteredData, setFilteredData] = React.useState([]);
    const [notFound, setNotFound] = React.useState(false);
    const [isFilter, setIsFilter] = React.useState(false);
    

    // React.useEffect(() => {
    //     console.log(isFilter, "isFilter");
    // }, [isFilter]);
    
    React.useEffect(() => {
        setFilteredData([]);
    }, [])

    function deleteFromFiltered(movie) {
        if (filteredData.length > 0) {
            const newData = filteredData.filter((movieFromFilter) => {
                if (movieFromFilter.movieId === movie.movieId) {
                    return null;
                } else {
                    return movieFromFilter;
                }
            });
                setFilteredData(newData);
            }
    }
    
    React.useEffect(() => {
        if (moviesFromStorage.length > 0) {
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }, [moviesFromStorage.length]);

    function setMoviesToRender() {
        if (filteredData.length > 0) {
            setIsFilter(true);
        } else {
            setIsFilter(false);
        }
    }

    React.useEffect(setMoviesToRender, [filteredData]);

    return (
        <section className="movies">
            <SearchForm setFilterToData={setFilteredData} filteredData={filteredData} />
            {notFound ? <p className="movies__not-found movies__not-found_visible">Список сохраненных фильмов пуст</p> : null}
            <MoviesCardList movies={isFilter ? filteredData : moviesFromStorage} deleteSavedMovie={props.deleteSavedMovie} deleteFromFiltered={deleteFromFiltered} />
        </section >
    )
}

export default Movies;