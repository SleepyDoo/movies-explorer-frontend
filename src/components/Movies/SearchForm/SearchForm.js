import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"
import React from 'react';
import { filterMovies } from "../../../utils/MoviesParser";
import ErrorPopup from "../../ErrorPopup/ErrorPopup";
import Preloader from "../../Preloader/Preloader";
import { getAllMovies } from "../../../utils/MoviesApi";
const SearchForm = (props) => {

    const searchSettingsLocal = JSON.parse(localStorage.getItem("filteredFilms"));

    function getSettings() {
        if (searchSettingsLocal) {
            return {key: searchSettingsLocal.key, isShort: searchSettingsLocal.isShort}
        } else {
            return {key: "", isShort: false}
        }
    }

    const searchSettings = getSettings();

    const moviesFromStorage = JSON.parse(localStorage.getItem("allMovies"));  


    const [keyWord, setKeyWord] = React.useState(searchSettings.key);
    const [isShort, setIsShort] = React.useState(searchSettings.isShort);
    const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
    const [errorName, setErrorName] = React.useState("Что-то пошло не так");
    const [isPreloaderOpened, setIsPreloaderOpened] = React.useState(false);
    const { setFilterToData } = props;

    

    function handleKeyWordChange(evt) {
        setKeyWord(evt.target.value);
    }

    function handleIsShortChange() {
        setIsShort(!isShort);
    }

    function saveFilterData(movies) {
        let newData = filterMovies(movies, keyWord, isShort);
        setFilterToData(newData);
        localStorage.setItem("filteredFilms", JSON.stringify({ films: newData, key: keyWord, isShort: isShort }));
    }

    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem("filteredFilms"));
        if (movies) {
            setIsShort(movies.isShort);
            setKeyWord(movies.key);
        }
    }, [])

    function closeErrorPopup() {
        setIsErrorPopupOpened(false);
    }

    function handleSearch() {
            if (!moviesFromStorage) {
                setIsPreloaderOpened(true);
                getAllMovies()
                    .then((res) => {
                    localStorage.setItem("allMovies", JSON.stringify(res));
                    saveFilterData(res);
                    setIsPreloaderOpened(false);
                  })
                  .catch(() => {
                    setErrorName("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
                    localStorage.removeItem("allMovies");
                    setIsErrorPopupOpened(true);
                    setIsPreloaderOpened(false);
                  });
            } else {
                saveFilterData(moviesFromStorage);
            }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (keyWord === "") {
            setIsErrorPopupOpened(true);
            setErrorName("Необходимо ввести ключевое слово в поиск");
        } else {
            handleSearch();
        }
    };
    
    React.useEffect(() => {
        if (keyWord !== "") {
            handleSearch();
        }
    }, [isShort])

    return (
        <div className="search-form">
                <form className="search-form__form" onSubmit={handleSubmit} noValidate>
                    <div className="search-form__container">
                    <input type="text"
                        name="name"
                        placeholder="Фильм"
                        className="search-form__input"
                        autoComplete="off"
                        required
                        onChange={handleKeyWordChange}
                        value={keyWord} />
                        <button type="submit" className="search-form__button" aria-label="Поиск">
                            <div className="search-form__icon" />
                        </button>
                    </div>
                <FilterCheckbox handler={handleIsShortChange} value={isShort} />
            </form>
            <ErrorPopup error={errorName} isOpen={isErrorPopupOpened} onClose={closeErrorPopup} />
            <Preloader isOpen={isPreloaderOpened} />
        </div>
    )
}

export default SearchForm;