import "./MenuButton.css"
import React from "react";

const MenuButton = (props) => {
    return (
        <button className={`menu-button ${!props.dark ? "menu-button_blue" : ""}`} onClick={props.onMenuClick} type="button"/>
    )
}

export default MenuButton;