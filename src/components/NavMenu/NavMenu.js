import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import ProfileButton from "../Header/ProfileButton/ProfileButton"

const NavMenu = (props) => {
    return (
        <div className="nav-menu nav-menu_opened">
            <button className="nav-menu__close-button" onClick={props.onClose}/>
            <div className="nav-menu__container">
                <div className="nav-menu__link-container">
                    <Link to="/" className="nav-menu__link">Главная</Link>
                    <Link to="/movies" className="nav-menu__link">Фильмы</Link>
                    <Link to="/saved-movies" className="nav-menu__link">Сохранённые фильмы</Link>
                </div>
                <div className="nav-menu__button-container">
                    <ProfileButton />
                </div>
            </div>
        </div>
    )
}

export default NavMenu;