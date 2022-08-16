import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import NotFound from "../NotFound/NotFound";
import NavMenu from "../NavMenu/NavMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



function App() {

  const isLoggedIn = true;
  const location = useLocation();

  const [currentPage, setCurrentPage] = React.useState(location.pathname.toLowerCase());
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);

  function openMenu() {
    setIsNavMenuOpened(true);
  }

  function closeMenu() {
    setIsNavMenuOpened(false);
  }

  React.useEffect(() => {
    setCurrentPage(location.pathname.toLowerCase());
  }, [location]);

  const headerBlue = (currentPage === "/");
  const headerDark = (currentPage === '/movies' || currentPage === '/saved-movies' || currentPage === '/profile');

  return (
    <div className="app">
      {isNavMenuOpened ? <NavMenu onClose={closeMenu} /> : null}

      {(headerBlue || headerDark) ? <Header dark={headerDark} isLoggedIn={isLoggedIn} onMenuClick={openMenu} /> : null}
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route path="/movies" element={<Movies />} />
      
        <Route path="/saved-movies" element={<Movies />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/signin" element={<Login />} />
          
        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
