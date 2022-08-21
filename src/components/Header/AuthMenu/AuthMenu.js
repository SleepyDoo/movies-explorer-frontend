import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import "./AuthMenu.css";

const AuthMenu = () => {
    return (
        <div className="auth-menu">
        <Link className='auth-menu__link' to="/signup">Регистрация</Link>
            <LoginButton />
        </div>
    )
}

export default AuthMenu;