import "./MoreButton.css"
import React from 'react';

const MoreButton = (props) => {
    return (
        <button className={`more-button ${props.isOpen ? "" : "more-button__hidden"}`} type="submit" onClick={props.action}>Еще</button>
    )
}

export default MoreButton;