import "./FilterCheckbox.css"

const FilterCheckbox = () => {
    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__checkbox" type="checkbox" id="short-films" />
            <div className="filter-checkbox__container" />
            <span className="filter-checkbox__checkbox-name">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;