import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

import NavMenu from "../NavMenu/NavMenu";

function App() {
  return (
    <div className="app">
      <NavMenu />
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route path="/movies" element={<Movies />} />
      
        <Route path="/saved-movies" element={<Movies />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/signin" element={<Login />} />
          
        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
