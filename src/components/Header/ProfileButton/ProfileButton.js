import React from "react";
import "./ProfileButton.css";
import { Link } from "react-router-dom";

const ProfileButton = () => {
    return (
        <Link className="profile-button__button" to="/profile">
            <p  className="profile-button__name">Аккаунт</p>
            <div className="profile-button__sym" />
        </Link>
    )
}

export default ProfileButton;