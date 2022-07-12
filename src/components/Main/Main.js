import "./Main.css"
import React from "react";

import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Main;