import React from "react";
import { Link } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./UserMenu.css";

const UserMenu = () => {
    return (
        <div className="user-menu">
            <div className="user-menu__container">
                <Link to="/Movies" className="user-menu__link" >Фильмы</Link>
                <Link to="/Movies" className="user-menu__link user-menu__link_active">Сохранённые фильмы</Link>
            </div>

            <ProfileButton />
        </div>
    )
}

export default UserMenu;