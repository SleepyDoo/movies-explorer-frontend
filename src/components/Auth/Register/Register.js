import "./Register.css";
import "../Auth.css";
import { Link } from "react-router-dom";
import React from 'react';
import AuthHeader from "../AuthHeader/AuthHeader";
import { validateEmail, validateName, validateOther } from "../../../utils/Validaton";

const Register = (props) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const [isNameValid, setIsNameValid] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("");
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);

    const isFormValid = (isEmailValid && isNameValid && isPasswordValid);

    
    React.useEffect(() => {
        const validation = validateName(name);
        setIsNameValid(validation.isValid);
        if (!validation.isValid) {
            setNameError(validation.error);
        }
    }, [name]);
    
    React.useEffect(() => {
        const validation = validateOther(password);
        setIsPasswordValid(validation.isValid);
        if (!validation.isValid) {
            setPasswordError(validation.error);
        }
    }, [password]);

    React.useEffect(() => {
        const validation = validateEmail(email);
        setIsEmailValid(validation.isValid);
        if (!validation.isValid) {
            setEmailError(validation.error);
        }
    }, [email]);

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
        const validation = validateOther(password);
        setIsPasswordValid(validation.isValid);
        if (!validation.isValid) {
            setPasswordError(validation.error);
        }
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
        const validation = validateEmail(email);
        setIsEmailValid(validation.isValid);
        if (!validation.isValid) {
            setEmailError(validation.error);
        }
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
        const validation = validateName(name);
        setIsNameValid(validation.isValid);
        if (!validation.isValid) {
            setNameError(validation.error);
        }
    }

    function onSubmit(evt) {
        evt.preventDefault();
        props.handleRegister({name, email, password})
    }

    return (
        <section className="register">
            <AuthHeader />
            <p className="auth__greeting">Добро пожаловать!</p>
            <form className="auth__form" onSubmit={onSubmit} noValidate>
                <fieldset className="auth__fieldset">
                    <p className="auth__input-label">Имя</p>
                    <input
                        className={`auth__input ${isNameValid ? "" : "auth__input_errored"}`}
                        type="string"
                        name="name"
                        required
                        autoComplete="off"
                        onChange={handleNameChange}
                        value={name} />
                    {isNameValid ? null : <p className="auth__error">{nameError}</p>}
                    <p className="auth__input-label">E-mail</p>
                    <input
                        className={`auth__input ${isEmailValid ? "" : "auth__input_errored"}`}
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        onChange={handleEmailChange}
                        value={email} />
                    {isEmailValid ? null : <p className="auth__error">{emailError}</p>}
                    <p className="auth__input-label">Пароль</p>
                    <input
                        className={`auth__input ${isPasswordValid ? "" : "auth__input_errored"}`}
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        onChange={handlePasswordChange}
                        value={password} />
                    {isPasswordValid ? null : <p className="auth__error">{passwordError}</p>}
                </fieldset>
                <button type="submit" className={`auth__button ${isFormValid ? "" : "auth__button_inactive"}`} disabled={!isFormValid}>Зарегистрироваться</button>
            </form>
            <div className="auth__container">
                <p className="auth__question">Уже зарегистрированы?</p>
                <Link className="auth__link" to="/signin">Войти</Link>
            </div>
        </section>
    )
}

export default Register;