import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__container navigation__container_dark">
                <Link to="/Movies" className="navigation__link_dark" >Фильмы</Link>
                <Link to="/Movies" className="navigation__link_dark header__link_active">Сохранённые фильмы</Link>
            </div>
            {/* <div className='navigation__container'>
                <Link className='navigation__link' to="/signup">Регистрация</Link>
            </div> */}
        </div>

    )
}

export default Navigation;