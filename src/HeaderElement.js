import React from 'react';
import './HeaderElement.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

// import logo from '../public/img/sigma.svg';

function HeaderElement() {
    const [{ basket }] = useStateValue();

    return (
        <header className='header'>
            <Link to='/'>
                <img src='/img/sigma.svg' className='header__logo' alt='logo' />
            </Link>
            <nav className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
                {/* <div className='header__optionLine'>Szukaj</div> */}
            </nav>
            <nav className='header__nav'>
                <Link
                    to='login'
                    style={{ textDecoration: 'none' }}
                    className='header__navBasket'>
                    <span className='header__navOption'>Zaloguj się</span>
                </Link>
                <div className='header__navBasket'>
                    <Link
                        to='/checkout'
                        style={{ textDecoration: 'none' }}
                        className='header__navBasket'>
                        <span className='header__navOption'>Twój koszyk</span>
                        <ShoppingBasketIcon className='header__navBasketIcon' />
                        <span className='header__navOption header__navBasketCounter'>
                            {basket?.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default HeaderElement;
