import "./Header.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import ProfileButton from "./ProfileButton/ProfileButton";
import LoginButton from "./LoginButton/LoginButton";
import MenuButton from "./MenuButton/MenuButton";




// eslint-disable-next-line
const currentPage = location.href.replace('http://localhost:3000', '');

const isLoggedin = true;

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

    return (
        <header className={`${(currentPage === "/") ? 'header' : ''} ${(currentPage === '/movies' || currentPage === '/saved-movies' || currentPage === '/profile') ? 'header header_dark' : 'header__invisible'} `}>
            <Link to="/" className="header__logo" />

            {(isMobile && isLoggedin) ? <MenuButton /> : null}

            {/* {!isMobile && !isLoggedin ? <div className="header__nav-container">
                <Navigation />
                <LoginButton />
            </div> : null} */}

            {(!isLoggedin && isMobile )? <Navigation /> : null}

            {isLoggedin && !isMobile ? <ProfileButton /> : null}

            

            {/* _______Logged in on mobile:_______ */}
            
            

            {/* _______Loggeg in on desktop:_______ */}
            {/* <Navigation />
            <ProfileButton /> */}


            {/* _______Not logged in:_______  */}
            {/* <div className="header__nav-container">
                <Navigation />
                <LoginButton />
            </div> */}

        </header>
    )
}

export default Header;