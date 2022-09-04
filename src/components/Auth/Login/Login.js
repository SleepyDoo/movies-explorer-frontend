import "./Login.css"
import "../Auth.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import React from 'react';
import { Link } from "react-router-dom"; 
import { validateEmail, validateOther } from "../../../utils/Validaton";

const Login = (props) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("");
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const [isPasswordErrorVisible, setPasswordErrorVisible] = React.useState(true);
    const [isEmailErrorVisible, setIsEmailErrorVisible] = React.useState(true);
    const [isFormValid, setIsFormValid] = React.useState(false);

    React.useEffect(() => {
        setIsFormValid(isEmailValid && isPasswordValid);
    }, [isEmailValid, isPasswordValid])

    React.useEffect(() => {
        const validation = validateOther(password);
        setIsPasswordValid(validation.isValid);
        setPasswordErrorVisible(validation.isValid);
        if (!validation.isValid) {
            setPasswordError(validation.error);
        }
    }, [password]);

    React.useEffect(() => {
        const validation = validateEmail(email);
        setIsEmailValid(validation.isValid);
        setIsEmailErrorVisible(validation.isValid);
        if (!validation.isValid) {
            setEmailError(validation.error);
        }
    }, [email]);

    React.useEffect(() => {
        setPasswordErrorVisible(true);
        setIsEmailErrorVisible(true);
        setIsFormValid(false);
    }, []);

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
                        className={`auth__input ${isEmailValid || isEmailErrorVisible ? "" : "auth__input_errored"}`}
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        value={email}
                        onChange={handleEmailChange} />
                    {isEmailValid || isEmailErrorVisible ? null : <p className="auth__error">{emailError}</p>}
                    <p className="auth__input-label">Пароль</p>
                    <input
                        className={`auth__input ${isPasswordValid || isPasswordErrorVisible ? "" : "auth__input_errored"}`}
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        value={password}
                        onChange={handlePasswordChange} />
                    {isPasswordValid || isPasswordErrorVisible ? null : <p className="auth__error">{passwordError}</p>}
                </fieldset>
                <button type="submit" className={`auth__button ${isFormValid ? "" : "auth__button_inactive"}`} disabled={!isFormValid}>Войти</button>
            </form>
            <div className="auth__container">
                <p className="auth__question">Ещё не зарегистрированы?</p>
                <Link className="auth__link" to="/signup">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;