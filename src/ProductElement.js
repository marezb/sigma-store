import React from 'react';
import './ProductElement.scss';
import { useStateValue } from './StateProvider';
import { nanoid } from 'nanoid';
// import zdjecie from './img/pr.png';

export default function ProductElement({
    uniqueID,
    id,
    title,
    desc,
    time,
    price,
    image,
}) {
    const [{ basket }, dispatch] = useStateValue();

    const format = {
        style: 'currency',
        currency: 'PLN',
    };
    const localization = navigator.language;
    const formattedPrice = new Intl.NumberFormat(localization, format).format(price);

    const addToBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                uniqueID: nanoid(10),
                id,
                title,
                desc,
                time,
                price,
                image,
            },
        });
    };

    return (
        <main className='product'>
            <img
                src={`/img/${image}`}
                alt='zdjecie produktu'
                className='product__image'
            />
            <div>
                <section className='product__info'>
                    <b className='product__title'>{title}</b>
                    <p className='product__desc'>{desc}</p>
                    <div>{time && `Ilość godzin lekcyjnych: ${time}`}</div>
                </section>
                <section className='product__buy'>
                    <div className='product__price'>Cena: {formattedPrice}</div>

                    <button
                        onClick={addToBasket}
                        className='product__button'
                        type='button'>
                        Dodaj do koszyka
                    </button>
                </section>
            </div>
        </main>
    );
}
