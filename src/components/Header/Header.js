import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header header_dark">
            <Link to="/" className="header__logo" />
            <div className="header__container_dark">
                <Link to="/Movies" className="header__link_dark" >Фильмы</Link>
                <Link to="/Movies" className="header__link_dark header__link_active">Сохранённые фильмы</Link>
            </div>
            <div className="header__container_acc">
                <Link to="/profile" className="header__link_acc">Аккаунт</Link>
                <div className="header__acc-sym" />
            </div>

            {/* <div className='header__container'>
                <Link className='header__link' to="/signup">Регистрация</Link>
                <div className='header__signin-container'>
                    <Link className='header__link header__link_route_signin' to="/signin">Вход</Link>
                </div>
            </div> */}

        </header>
    )
}

export default Header;