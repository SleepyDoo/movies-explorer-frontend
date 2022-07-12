import React from "react";
import "./NotFound.css"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found">
            <h1 className="not-found__heading">404</h1>
            <p className="not-found__paragraph">Страница не найдена</p>
            <Link className="not-found__link" to="/">Назад</Link>
        </section >
    )
}

export default NotFound;