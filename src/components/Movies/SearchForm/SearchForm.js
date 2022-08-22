import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"
import React from 'react';
import { filterMovies } from "../../../utils/MoviesParser";
import ErrorPopup from "../../ErrorPopup/ErrorPopup";
const SearchForm = (props) => {

    const [keyWord, setKeyWord] = React.useState("");
    const [isShort, setIsShort] = React.useState(false);
    const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
    const [errorName, setErrorName] = React.useState("Что-то пошло не так");

    const { allMovies, setFilterToData } = props;

    function handleKeyWordChange(evt) {
        setKeyWord(evt.target.value);
    }

    function handleIsShortChange() {
        setIsShort(!isShort);
    }

    function saveFilterData() {
        let newData = filterMovies(allMovies, keyWord, isShort);
        setFilterToData(newData);
    }

    function closeErrorPopup() {
        setIsErrorPopupOpened(false);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (keyWord === "") {
            console.log("starnge");
            setIsErrorPopupOpened(true);
            setErrorName("Необходимо ввести ключевое слово в поиск");
        } else {
            saveFilterData();
            setKeyWord("");
        }
      };

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
        </div>
    )
}

export default SearchForm;