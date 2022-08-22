import "./Login.css"
import "../Auth.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import React from 'react';
import { Link } from "react-router-dom"; 

const Login = (props) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }


    function onLogin(evt) {
        evt.preventDefault();
        props.handleLogin({email, password})
    }

    return (
        <section className="login">
            <AuthHeader />
            <p className="auth__greeting">Рады видеть!</p>
            <form className="auth__form" onSubmit={onLogin}>
                <fieldset className="auth__fieldset">
                    <p className="auth__input-label">E-mail</p>
                    <input
                        className="auth__input"
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        value={email}
                        onChange={handleEmailChange} />
                    <p className="auth__input-label">Пароль</p>
                    <input
                        className="auth__input"
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        value={password}
                        onChange={handlePasswordChange} />
                </fieldset>
                <button type="submit" className="auth__button">Войти</button>
            </form>
            <div className="auth__container">
                <p className="auth__question">Ещё не зарегистрированы?</p>
                <Link className="auth__link" to="/signup">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;