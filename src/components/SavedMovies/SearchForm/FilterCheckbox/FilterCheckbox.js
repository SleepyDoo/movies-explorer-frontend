import "./FilterCheckbox.css"

const FilterCheckbox = (props) => {
    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__checkbox"
                type="checkbox"
                onChange={props.handler}
                value={props.value}/>
            <div className="filter-checkbox__container" />
            <span className="filter-checkbox__checkbox-name">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;