import "./Profile.css"
import React from 'react';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div className="profile">
            
                <h2 className="profile__heading">Привет, Виталий!</h2>
                <form className="profile-form">
                    <div className="profile__container">
                        <label className="profile__label">Имя</label>
                        <input
                            className="profile__input"
                            type="text"
                            required
                            name="name"
                            maxLength="30"
                            minLength="2"
                            value="Qwerty"
                            readOnly
                            autoComplete="off" />
                    </div>
                    <div className="profile__container">
                        <label className="profile__label">E-mail</label>
                        <input className="profile__input"
                            type="emaio"
                            required
                            name="email"
                            value="Qwerty@qwerty.q"
                            readOnly
                            autoComplete="off" />
                    </div>
                    <button className="profile__edit">Редактировать</button>
                </form>
            <Link className="profile__logout" to="/signin">Выйти из аккаунта</Link>

        </div>
        </div>

    )
}

export default Profile;