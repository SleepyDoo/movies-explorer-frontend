import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import ProfileButton from "../Header/ProfileButton/ProfileButton"

const NavMenu = () => {
    return (
        <div className="nav-menu nav-menu_opened">
            <div className="nav-menu__close-button" />
            <div className="nav-menu__container">
                <div className="nav-menu__link-container">
                    <Link to="/" className="nav-menu__link">Главная</Link>
                    <Link to="/" className="nav-menu__link">Фильмы</Link>
                    <Link to="/" className="nav-menu__link">Сохранённые фильмы</Link>
                </div>
                <div className="nav-menu__button-container">
                    <ProfileButton />
                </div>
            </div>
        </div>
    )
}

export default NavMenu;