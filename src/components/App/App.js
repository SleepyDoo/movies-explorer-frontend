import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
      
        <Route path="/saved-movies">
          <Header />
          <Movies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
