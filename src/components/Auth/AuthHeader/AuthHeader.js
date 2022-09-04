import "./AuthHeader.css"
import React from 'react';
import { Link } from "react-router-dom";

const AuthHeader = () => {
    return (
        <header className="auth-header">
            <Link to="/" className="auth-header__logo" />
        </header>
    )
}

export default AuthHeader;