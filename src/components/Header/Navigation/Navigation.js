import React from "react";
import "./Navigation.css";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import MenuButton from "../MenuButton/MenuButton";

const Navigation = (props) => {

    return (
        <div className="navigation">

            {(props.isLoggedIn && !props.isMobile) ? <UserMenu /> : null}
            
            {(props.isLoggedIn && props.isMobile) ? <MenuButton dark={props.dark} onMenuClick={props.onMenuClick} /> : null}

            {!props.isLoggedIn ? <AuthMenu /> : null}

        </div>
    )
}

export default Navigation;