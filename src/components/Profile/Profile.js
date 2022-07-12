import "./Profile.css"
import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header"

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="profile">
            
            <h2 className="profile__heading">Привет, Виталий!</h2>
            <div className="profile__container">
                <p className="profile__container-heading">Имя</p>
                <p className="profile__text">qwerty</p>
            </div>
            <div className="profile__container">
                <p className="profile__container-heading">E-mail</p>
                <p className="profile__text">qwerty</p>
            </div>
            <p className="profile__edit">Редактировать</p>
            <Link className="profile__logout" to="/signin">Выйти из аккаунта</Link>

        </div>
        </div>

    )
}

export default Profile;