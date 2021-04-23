import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import logo from './img/sigma.svg';

function Header() {
    return (
        <div className='header'>
            <img src={logo} className='header__logo' alt='logo' />

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
                {/* <div className='header__optionLine'>Szukaj</div> */}
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLine'>Zaloguj się</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLine'>Twój</span>
                    <span className='header__optionLine'>Koszyk</span>
                </div>

                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className='header__basketIcon' />
                    <span className='header__optionLine header__basketCount'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
