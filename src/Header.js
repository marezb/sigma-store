import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// import logo from '../public/img/sigma.svg';

function Header() {
    return (
        <header className='header'>
            <title>Sigma Sklep</title>
            <img src='/img/sigma.svg' className='header__logo' alt='logo' />
            <nav className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
                {/* <div className='header__optionLine'>Szukaj</div> */}
            </nav>
            <nav className='header__nav'>
                <span className='header__navOption'>Zaloguj się</span>
                <span className='header__navOption'>Twój Koszyk</span>
                <div className='header__navBasket'>
                    <ShoppingBasketIcon className='header__navBasketIcon' />
                    <span className='header__navOption header__navBasketCounter'>0</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
