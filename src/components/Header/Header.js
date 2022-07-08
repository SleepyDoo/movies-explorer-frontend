import './Header.css';
import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            {/* <nav className='header__nav'>
                <Link className='header__link-signup'>Регистрация</Link>
                <Link className='header__link-signin'>Вход</Link>
            </nav> */}
        </header>
    )
}

export default Header;