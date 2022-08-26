import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"
import React from 'react';
import { filterMovies } from "../../../utils/MoviesParser";
import ErrorPopup from "../../ErrorPopup/ErrorPopup";
const SearchForm = (props) => {

    const moviesFromStorage = JSON.parse(localStorage.getItem("savedMovies"));

    const [keyWord, setKeyWord] = React.useState("");
    const [isShort, setIsShort] = React.useState(false);
    const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
    const [errorName, setErrorName] = React.useState("Что-то пошло не так");
    const [isNotFound, setIsNotFound] = React.useState(false);

    const { setFilterToData, filteredData } = props;

    function handleKeyWordChange(evt) {
        setKeyWord(evt.target.value);
    }

    function handleIsShortChange() {
        setIsShort(!isShort);
    }

    function saveFilterData() {
        let newData = filterMovies(moviesFromStorage, keyWord, isShort);
        if (newData.length < 1) {
            setFilterToData([]);
            setKeyWord("");
            setIsNotFound(true);
            setTimeout(() => {
                setIsNotFound(false)
                setIsShort(false);
            }, 3000);
            
        } else {
            setFilterToData(newData);
        }
    }

    React.useEffect(() => {
        if (filteredData.length < 1) {
            setKeyWord("");
            setIsShort(false);
        }
    }, [filteredData])

    function closeErrorPopup() {
        setIsErrorPopupOpened(false);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (keyWord === "") {
            setIsErrorPopupOpened(true);
            setErrorName("Необходимо ввести ключевое слово в поиск");
        } else {
            saveFilterData();
        }
      };

    
    React.useEffect(() => {
        saveFilterData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            value={keyWord}/>
                        <button type="submit" className="search-form__button" aria-label="Поиск">
                            <div className="search-form__icon" />
                        </button>
                    </div>
                <FilterCheckbox handler={handleIsShortChange} value={isShort} saveFilterData={saveFilterData} />
                {isNotFound ? <p className="search-form__not-found">Фильмы по данному запросу не найдены</p> : null}
            </form>
            <ErrorPopup error={errorName} isOpen={isErrorPopupOpened} onClose={closeErrorPopup} />
        </div>
    )
}

export default SearchForm;