import "./Login.css"
import "../Auth.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <AuthHeader />
            <p className="auth__greeting">Рады видеть!</p>
            <form className="auth__form">
                <fieldset className="auth__fieldset">
                    <p className="auth__input-label">E-mail</p>
                    <input
                        className="auth__input"
                        type="email"
                        name="email"
                        required />
                    <p className="auth__input-label">Пароль</p>
                    <input
                        className="auth__input"
                        type="password"
                        name="password"
                        required />
                </fieldset>
                <button type="submit" className="auth__button">Войти</button>
            </form>
            <div className="auth__container">
                <p className="auth__question">Ещё не зарегистрированы?</p>
                <a className="auth__link" href="http://123.ru">Регистрация</a>
            </div>
        </div>
    )
}

export default Login;