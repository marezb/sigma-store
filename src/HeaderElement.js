import React from "react";
import "./HeaderElement.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// import logo from '../public/img/sigma.svg';

function HeaderElement({ placeholder, handleChange, searchInput }) {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log('HeaderElement | user', user.email);

    const handleAuthentication = () => {
        if (user) auth.signOut();
    };

    return (
        <header className='header'>
            <Link to='/'>
                <img src='/img/sigma.svg' className='header__logo' alt='logo' />
            </Link>
            {searchInput && (
                <nav className='header__search'>
                    <input
                        className='header__searchInput'
                        type='search'
                        placeholder={placeholder}
                        onChange={handleChange}
                    />
                    <SearchIcon className='header__searchIcon' />
                    {/* <div className='header__optionLine'>Szukaj</div> */}
                </nav>
            )}
            <nav className='header__nav'>
                <span className='header__userName'>
                    {user ? `Witaj: ${user.email} ` : ""}
                </span>
                <div className='header__navBasket'>
                    <Link
                        to='/checkout'
                        style={{ textDecoration: "none" }}
                        className='header__navBasket'>
                        <span className='header__navOption'>Twój koszyk</span>
                        <ShoppingBasketIcon className='header__navBasketIcon' />
                        <span className='header__navOption header__navBasketCounter'>
                            {basket?.length}
                        </span>
                    </Link>
                </div>
                <Link
                    to={"/orders"}
                    style={{ textDecoration: "none" }}
                    className='header__navBasket '>
                    <span className='header__navOption  header__login'>
                        {user ? "Historia zamówień" : ""}
                    </span>
                </Link>
                <Link
                    to={user ? "/" : "/login"}
                    style={{ textDecoration: "none" }}
                    className='header__navBasket '>
                    <span
                        onClick={handleAuthentication}
                        className='header__navOption  header__login'>
                        {user ? "Wyloguj się" : "Zaloguj się"}
                    </span>
                </Link>
            </nav>
        </header>
    );
}

export default HeaderElement;
