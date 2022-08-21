import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
//import ProfileButton from "./ProfileButton/ProfileButton";
// import LoginButton from "./LoginButton/LoginButton";
//import MenuButton from "./MenuButton/MenuButton";

const Header = (props) => {

    return (
        <header className={`header ${props.dark ? 'header header_dark' : ''}`}>
            <Link to="/" className="header__logo" />

            <Navigation isMobile={props.isMobile} isLoggedIn={props.isLoggedIn} dark={props.dark} onMenuClick={props.onMenuClick} />

        </header>
    )
}

export default Header;