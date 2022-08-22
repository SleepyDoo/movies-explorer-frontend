import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useCookies, withCookies } from "react-cookie"


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
import { createUser, login, updateUser, getUser, deleteMovie, getMovies, createMovie } from "../../utils/MainApi";


//export default withRouter(Header);

function App() {

  const location = useLocation();
  const history = createBrowserHistory();

  const [currentPage, setCurrentPage] = React.useState(location.pathname.toLowerCase());
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
  const [isPreloaderOpened, setIsPreloaderOpened] = React.useState(false);
  const [errorName, setErrorName] = React.useState("Что-то пошло не так");
  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [headers, setHeaders] = React.useState({
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem("jwt")
  })

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

  function closeErrorPopup() {
    setIsErrorPopupOpened(false);
  }








  // MOVIES

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




  // AUTH

  function handleRegister(data) {
    console.log(history);
    setIsPreloaderOpened(true);
    createUser(data, headers)
      .then((res) => {
        console.log(res);
        setIsPreloaderOpened(false);
        // history.push("/signin");
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setErrorName(err.name);
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
    })
  }

  function handleLogin(data) {
    setIsPreloaderOpened(true);
    console.log(headers, "headers");
    login(data, headers)
      .then((data) => {
        console.log(data,"login data");
        if (data) {
          localStorage.setItem("jwt", data.data);
        }
        setIsLoggedIn(true);
        setIsPreloaderOpened(false);
        // history.push("/movies");
        // window.location.reload();
      })
      .catch((err) => {
        setErrorName(err.message);
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
    })
  }

  

  React.useEffect(() => {
    console.log(cookies, "cookies");
    console.log(headers, "headers2");
    if (cookies || localStorage.getItem("jwt")) {
      getUser(headers)
      .then((data) => {
        console.log(data, "data");
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch(() => {
        localStorage.removeItem("jwt");
      })
    }
  }, []);




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

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          
          <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

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
