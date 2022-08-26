import "./Profile.css"
import React from 'react';
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { validateEmail, validateName } from "../../utils/Validaton";

const Profile = (props) => {

    // const currentUser = React.useContext(CurrentUserContext);

    const currentUser = { name: "name", email: "email@email.com" };

    const [email, setEmail] = React.useState(currentUser.email);
    const [name, setName] = React.useState(currentUser.name);
    const [nameError, setNameError] = React.useState("");
    const [isNameValid, setIsNameValid] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    // const [isEmailChanged, setEmailIsChanged] = React.useState(email === currentUser.email);
    // const [isNameChanged, setNameIsChanged] = React.useState(email === currentUser.name);

    
    const isEmailChanged = !(email === currentUser.email);
    const isNameChanged = !(name === currentUser.name);
    const isFormValid = ((isEmailValid && isNameValid) && (isNameChanged || isEmailChanged));


    React.useEffect(() => {
        const validation = validateEmail(email);
        setIsEmailValid(validation.isValid);
        if (!validation.isValid) {
            setEmailError(validation.error);
        }
    }, [email, isEmailChanged]);

    React.useEffect(() => {
        const validation = validateName(name);
        setIsNameValid(validation.isValid);
        if (!validation.isValid) {
            setNameError(validation.error);
        }
    }, [name, isNameChanged]);

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

    return (
        <div>
            <div className="profile">
                <h2 className="profile__heading">Привет, Виталий!</h2>
                <form className="profile-form" noValidate>
                    <div className="profile__container">
                        <label className="profile__label">Имя</label>
                        <input
                            className={`profile__input ${isNameValid ? "" : "profile__input_errored"}`}
                            type="text"
                            required
                            name="name"
                            maxLength="30"
                            minLength="2"
                            value={name}
                            autoComplete="off"
                            onChange={handleNameChange}/>
                    </div>
                    {isNameValid ? null : <p className="profile__error">{nameError}</p>}
                    <div className="profile__container">
                        <label className="profile__label">E-mail</label>
                        <input className={`profile__input ${isEmailValid ? "" : "profile__input_errored"}`}
                            type="email"
                            required
                            name="email"
                            value={email}
                            autoComplete="off"
                            onChange={handleEmailChange}/>
                    </div>
                    {isEmailValid ? null : <p className="profile__error">{emailError}</p>}
                    <button className={`profile__edit ${isFormValid ? "" : "profile__edit_inactive"}`}
                        type="submit"
                        disabled={!isFormValid}>
                        Редактировать
                    </button>
                </form>
                <button className="profile__logout" onClick={props.handleLogOut}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;