import "./FilterCheckbox.css"
import React from "react";

const FilterCheckbox = (props) => {

    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__checkbox"
                type="checkbox"
                onChange={props.handler}
                checked={props.value} />
            <div className="filter-checkbox__container" />
            <span className="filter-checkbox__checkbox-name">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;