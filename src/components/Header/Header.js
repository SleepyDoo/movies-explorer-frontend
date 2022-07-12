import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import ProfileButton from "./ProfileButton/ProfileButton";
import LoginButton from "./LoginButton/LoginButton";
import MenuButton from "./MenuButton/MenuButton";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo" />

            {/* _______Logged in on mobile:_______ */}
            {/* <MenuButton /> */}
            

            {/* _______Loggeg in on desktop:_______ */}
            {/* <Navigation />
            <ProfileButton /> */}


            {/* _______Not logged in:_______  */}
            <div className="header__nav-container">
                <Navigation />
                <LoginButton />
            </div>

        </header>
    )
}

export default Header;