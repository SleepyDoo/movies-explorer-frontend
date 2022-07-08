import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"
const SearchForm = () => {
    return (
        <div className="search-form">
                <form className="search-form__form">
                    <div className="search-form__container">
                        <input type="text" name="name" placeholder="Фильм" className="search-form__input" />
                        <button type="submit" className="search-form__button" aria-label="Поиск">
                            <div className="search-form__icon" />
                        </button>
                    </div>
                <FilterCheckbox />
                </form>
        </div>
    )
}

export default SearchForm;