import "./Header.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
//import ProfileButton from "./ProfileButton/ProfileButton";
// import LoginButton from "./LoginButton/LoginButton";
//import MenuButton from "./MenuButton/MenuButton";

const Header = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    const isMobile = (width <= 768);

    const updateWidth = () => {
        setWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    return (
        <header className={`header ${props.dark ? 'header header_dark' : ''}`}>
            <Link to="/" className="header__logo" />

            <Navigation isMobile={isMobile} isLoggedIn={props.isLoggedIn} dark={props.dark} onMenuClick={props.onMenuClick} />

        </header>
    )
}

export default Header;