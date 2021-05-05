import React from "react";
import "./CategoriesElement.scss";
import { Link } from "react-router-dom";

function CategoriesElement() {
    return (
        <div className='categories'>
            <Link to='/szkolenia' className='categories__link'>
                <span>Szkolenia</span>
            </Link>
            <Link to='/sprzet' className='categories__link'>
                <span>Sprzęt</span>
            </Link>
            <Link to='/oprogramowanie' className='categories__link'>
                <span>Oprogramowanie</span>
            </Link>
            <Link to='/uslugi' className='categories__link'>
                <span>Usługi</span>
            </Link>
            <Link to='/' className='categories__link'>
                <span>Wszystko</span>
            </Link>
        </div>
    );
}

export default CategoriesElement;
