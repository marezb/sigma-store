import React from 'react';
import './ProductWidget.scss';
// import zdjecie from './img/pr.png';

export default function ProductWidget({ title, desc, time, price, image }) {
    // const zdjecie = require('./img/product1.png');
    return (
        <main className='product'>
            <img src={image} alt='zdjecie produktu' className='product__image' />
            <div>
                <section className='product__info'>
                    <b className='product__title'>{title}</b>
                    <p className='product__desc'>{desc}</p>
                    <div>{time && `Ilość godzin lekcyjnych: ${time}`}</div>
                </section>
                <section className='product__buy'>
                    <div className='product__price'>Cena {price} PLN</div>

                    <button className='product__button' type='button'>
                        Dodaj do koszyka
                    </button>
                </section>
            </div>
        </main>
    );
}
