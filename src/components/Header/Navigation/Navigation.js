import React from "react";
import "./Navigation.css";
// import AuthMenu from "../AuthMenu/AuthMenu";
// import UserMenu from "../UserMenu/UserMenu";
import MenuButton from "../MenuButton/MenuButton";

const Navigation = () => {
    return (
        <div className="navigation">

            {/* ______logged in on desktop:______ */}
            {/* <UserMenu /> */}
            {/* ___________ */}

            

            {/* ______logged in on mobile:______ */}
            <MenuButton />
            {/* _______________ */}

            


            {/* ______Not logged in:______ */}
            {/* <AuthMenu /> */}
            {/* ________________ */}
        </div>
    )
}

export default Navigation;