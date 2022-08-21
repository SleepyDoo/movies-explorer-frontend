import React from "react";
import "./NotFound.css"
import { createBrowserHistory } from "history";


const NotFound = () => {

    let history = createBrowserHistory();

    function back() {
        history.back();
    }

    return (
        <section className="not-found">
            <h1 className="not-found__heading">404</h1>
            <p className="not-found__paragraph">Страница не найдена</p>
            <button type="button" className="not-found__link" onClick={back}>Назад</button>
        </section >
    )
}

export default NotFound;