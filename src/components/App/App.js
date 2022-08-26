// Примечания по проекту:

// Поиск по сохраненным фильмам намеренно был сделан отличным от поиска по всем фильмам, так как я считаю,
// что функциональность поиска по всем фильмом не подходит для поиска по сохраненным. 
// Так же я не нашла пункта в чеклисте, который бы говорил, что поиск должен быть абсолютно аналогичным. 
// Ниже перечисленные пункты были сделаны намеренно и не являются упущенными багами:
// 1. Если ничего не найдено, отображаются все сохраненные фильмы, а заданные параметры поиска очищаются
// 2. Параметры поиска не сохраняются, при следующих посещениях страницы отображаются все сохраненные фильмы
// 3. Чтобы переключить чекбокс, строка поиска не должна быть заполнена
//    Надеюсь, оставлять подобные послания не запрещено


import "./App.css";
import "../../vendor/normalize.css"
import React from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";


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
import OkPopup from "../okPopup/OkPopup";
import { createUser, login, updateUser, getUser, deleteMovie, getMySavedMovies, createMovie } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { parseNewMovieData } from "../../utils/MoviesParser";

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState(location.pathname.toLowerCase());
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = React.useState(false);
  const [isPreloaderOpened, setIsPreloaderOpened] = React.useState(false);
  const [isOkPopupOpened, setisOkPopupOpened] = React.useState(false);
  const [errorName, setErrorName] = React.useState("Что-то пошло не так");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const localSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));
  const jwt = localStorage.getItem('jwt');

  const headerBlue = (currentPage === "/");
  const headerDark = (currentPage === '/movies' || currentPage === '/saved-movies' || currentPage === '/profile');

  const [width, setWidth] = React.useState(window.innerWidth);
  const isMobile = (width <= 768);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  function openMenu() {
    setIsNavMenuOpened(true);
  }

  function closeMenu() {
    setIsNavMenuOpened(false);
  }

  React.useEffect(() => {
    setCurrentPage(location.pathname.toLowerCase());
  }, [location]);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function closeErrorPopup() {
    setIsErrorPopupOpened(false);
  }

  function closeOkPopup() {
    setisOkPopupOpened(false);
  }

  function whenError(err) {
    setErrorName(err);
    setIsErrorPopupOpened(true);
  }

  // MOVIES

  const getSavedMovies = (jwt) => {
    setIsPreloaderOpened(true);
    getMySavedMovies(jwt)
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify(res.data));
        setIsPreloaderOpened(false);
      })
      .catch(() => {
        setErrorName("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        localStorage.removeItem("savedMovies");
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
      });
  }

  function saveMovie(data) {
    setIsPreloaderOpened(true);
    console.log(data);
    const newData = parseNewMovieData(data);
    console.log(newData);
    createMovie(newData, jwt)
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify([...localSavedMovies, res.data]));
        setIsPreloaderOpened(false);
      })
      .catch((err) => {
        setErrorName(err);
        setIsErrorPopupOpened(true);
        setIsPreloaderOpened(false);
    })
  }

  function deleteSavedMovie(movie, deletefromFilter) {
    setIsPreloaderOpened(true);
    const movieId = localSavedMovies.find((element) => (element.movieId === movie.id) || (element.movieId === movie.movieId))._id;
    deleteMovie(movieId, jwt)
      .then((res) => {
        if (res) {
          const newData = localSavedMovies.filter((item) => movieId !== item._id);
          localStorage.setItem("savedMovies", JSON.stringify(newData));
          deletefromFilter(movie);
          setIsPreloaderOpened(false);
        }
      })
      .catch((err) => {
        whenError(err);
        setIsPreloaderOpened(false);
    })
  }

  // AUTH AND USER

  function handleLogOut() {
      localStorage.clear()
      setCurrentUser([]);
      setIsLoggedIn(false);
      navigate("/");
    }

  function whenLogin(user) {
    if (user) {
      localStorage.setItem("jwt", user.data);
      getSavedMovies(user.data);
    

      getUser(user.data)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setCurrentUser(res.data);
        })
        .catch((err) => {
          whenError(err);
          handleLogOut();
        })


      setIsLoggedIn(true);
      navigate("/movies");
    }
  }

  function handleRegister(data) {
    const loginData = { email: data.email, password: data.password };
    setIsPreloaderOpened(true);

    createUser(data)
      .then(() => {

        login(loginData)
          .then((user) => {
            whenLogin(user)
          })
          .catch((err) => {
            whenError(err);
          })
        
        setIsPreloaderOpened(false);

      })
      .catch((err) => {
        console.log(err);
        whenError(err);
        setIsPreloaderOpened(false);
      })
  }

  function handleLogin(data) {
    setIsPreloaderOpened(true);
    login(data)
      .then((res) => {
        whenLogin(res);
        setIsPreloaderOpened(false);
      })
      .catch((err) => {
        whenError(err)
        setIsPreloaderOpened(false);
      })
  }

    React.useEffect(() => {
      if (jwt) {
        setIsPreloaderOpened(true);
        getUser(jwt)
          .then((data) => {
            setIsLoggedIn(true);
            navigate(location.pathname);
            localStorage.setItem("user", JSON.stringify(data.data));
            setIsLoggedIn(true);
            setCurrentUser(data.data);
            setIsPreloaderOpened(false);
          })
          .catch((err) => {
            whenError(err);
            localStorage.removeItem("jwt");
            setIsLoggedIn(false);
          })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  function updateUserInfo(data) {
    setIsPreloaderOpened(true);
    updateUser(data, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        setIsPreloaderOpened(false);
        setisOkPopupOpened(true);
      })
      .catch((err) => {
        whenError(err);
        setIsErrorPopupOpened(true);
    })
  }
  
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          {isNavMenuOpened ? <NavMenu onClose={closeMenu} /> : null}

          {(headerBlue || headerDark) ? <Header dark={headerDark} isLoggedIn={isLoggedIn} onMenuClick={openMenu} isMobile={isMobile} /> : null}
          <main>
            <Routes>

              <Route element={isLoggedIn ? <Outlet /> : <Navigate to="/" />}>
                <Route path="/movies" element={<Movies width={width} saveMovie={saveMovie} deleteSavedMovie={deleteSavedMovie} />} />
                <Route path="/saved-movies" element={<SavedMovies width={width} getSavedMovies={getSavedMovies} deleteSavedMovie={deleteSavedMovie} />} />
                <Route path="/profile" element={<Profile handleLogOut={handleLogOut} updateUserInfo={updateUserInfo} />} />
              </Route>

              <Route exact path="/" element={<Main />} />

              <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          
              <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ErrorPopup error={errorName} isOpen={isErrorPopupOpened} onClose={closeErrorPopup} />
          <OkPopup isOpen={isOkPopupOpened} onClose={closeOkPopup} />
          <Preloader isOpen={isPreloaderOpened} />
        </div>
      </CurrentUserContext.Provider>
    );
  }

export default App;
