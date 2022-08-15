import "./Header.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
//import ProfileButton from "./ProfileButton/ProfileButton";
// import LoginButton from "./LoginButton/LoginButton";
//import MenuButton from "./MenuButton/MenuButton";




// eslint-disable-next-line
const currentPage = location.href.replace('http://localhost:3000', '').toLowerCase();

// const isLoggedin = false;

console.log(currentPage);

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const isMobile = (width <= 768);

    const updateWidth = () => {
        setWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    // const headerBlue = (currentPage === "/");
    // const headerDark = (currentPage === '/movies' || currentPage === '/saved-movies' || currentPage === '/profile');
    // const headerInv = (headerBlue || headerDark);

    return (
        // <header className={`${headerBlue ? 'header' : ''} ${headerDark ? 'header header_dark' : 'header__invisible'} `}>
            <header className="header"> 
            <Link to="/" className="header__logo" />

            <Navigation isMobile={isMobile} />

        </header>
    )
}

export default Header;