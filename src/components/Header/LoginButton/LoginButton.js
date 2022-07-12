import React from "react";
import "./LoginButton.css";
import { Link } from "react-router-dom";


const LoginButton = () => {
    return (
        <Link className="login-button__button" to="/signin">
            <p className="login-button__link">Вход</p>
        </Link>
    )
}

export default LoginButton;