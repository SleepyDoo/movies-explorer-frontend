import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import NotFound from "../NotFound/NotFound";
import NavMenu from "../NavMenu/NavMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";



function App() {

  const isLoggedIn = true;
  const location = useLocation();

  const [currentPage, setCurrentPage] = React.useState(location.pathname.toLowerCase());
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
  const [isPreloaderOpened, setIsPreloaderOpened] = React.useState(false);
  const [errorName, setErrorName] = React.useState("Что-то пошло не так");
  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function openMenu() {
    setIsNavMenuOpened(true);
  }

  function closeMenu() {
    setIsNavMenuOpened(false);
  }

  React.useEffect(() => {
    setCurrentPage(location.pathname.toLowerCase());
  }, [location]);

  const [width, setWidth] = React.useState(window.innerWidth);

  const isMobile = (width <= 768);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });


  const headerBlue = (currentPage === "/");
  const headerDark = (currentPage === '/movies' || currentPage === '/saved-movies' || currentPage === '/profile');

  // to API

  const getMovies = () => {
    setIsPreloaderOpened(true);
    getAllMovies()
      .then((res) => {
        setAllMovies(res);
        localStorage.setItem("allMovies", JSON.stringify(res));
        setIsPreloaderOpened(false);
      })
      .catch(() => {
        setErrorName("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        localStorage.removeItem("allMovies");
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
      });
}

  const getSavedMovies = () => {
    setIsPreloaderOpened(true);
    getAllMovies()
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem("savedMovies", JSON.stringify(res));
        setIsPreloaderOpened(false);
      })
      .catch(() => {
        setErrorName("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        localStorage.removeItem("savedMovies");
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
      });
  }
  
  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (localMovies) {
      setAllMovies(localMovies);
    } else {
      getMovies();
    }
  }, []);


  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (localMovies) {
      setSavedMovies(localMovies);
    } else {
      getSavedMovies();
    }
  }, []);

  function closeErrorPopup() {
    setIsErrorPopupOpened(false);
  }

  return (
    <div className="app">
      {isNavMenuOpened ? <NavMenu onClose={closeMenu} /> : null}

      {(headerBlue || headerDark) ? <Header dark={headerDark} isLoggedIn={isLoggedIn} onMenuClick={openMenu} isMobile={isMobile} /> : null}
      <main>
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/movies" element={<Movies width={width} allMovies={allMovies} />} />
      
          <Route path="/saved-movies" element={<SavedMovies width={width} savedMovies={savedMovies} />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/signin" element={<Login />} />
          
          <Route path="/signup" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ErrorPopup error={errorName} isOpen={isErrorPopupOpened} onClose={closeErrorPopup} />
      <Preloader isOpen={isPreloaderOpened} />
    </div>
  );
}

export default App;
