import "./Register.css";
import "../Auth.css";
import { Link } from "react-router-dom";
import React from 'react';
import AuthHeader from "../AuthHeader/AuthHeader";

const Register = (props) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        props.handleRegister({name, email, password})
    }

    return (
        <section className="register">
            <AuthHeader />
            <p className="auth__greeting">Добро пожаловать!</p>
            <form className="auth__form" onSubmit={onSubmit}>
                <fieldset className="auth__fieldset">
                    <p className="auth__input-label">Имя</p>
                    <input
                        className="auth__input"
                        type="string"
                        name="name"
                        required
                        autoComplete="off"
                        onChange={handleNameChange}
                        value={name}/>
                    <p className="auth__input-label">E-mail</p>
                    <input
                        className="auth__input"
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        onChange={handleEmailChange}
                        value={email} />
                    <p className="auth__input-label">Пароль</p>
                    <input
                        className="auth__input auth__input_type_error"
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        onChange={handlePasswordChange}
                        value={password}/>
                    <p className="auth__error">Что-то пошло не так...</p>
                </fieldset>
                <button type="submit" className="auth__button">Зарегистрироваться</button>
            </form>
            <div className="auth__container">
                <p className="auth__question">Уже зарегистрированы?</p>
                <Link className="auth__link" to="/signin">Войти</Link>
            </div>
        </section>
    )
}

export default Register;