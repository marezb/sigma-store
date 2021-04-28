import React from 'react';
import './CheckoutProductElement.scss';
import { useStateValue } from '../StateProvider';

export default function CheckoutProductElement({
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

    const removeFromBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                title: title,
                uniqueID: uniqueID,
            },
        });
    };

    return (
        <main className='checkoutProduct'>
            <img
                src={`/img/${image}`}
                alt='zdjecie produktu'
                className='checkoutProduct__image'
            />
            <div>
                <section className='checkoutProduct__info'>
                    <b className='checkoutProduct__title'>{title}</b>
                    <p className='checkoutProduct__desc'>{desc}</p>
                    <div>{time && `Ilość godzin lekcyjnych: ${time}`}</div>
                </section>
                <section className='checkoutProduct__buy'>
                    <div className='checkoutProduct__price'>Cena: {formattedPrice}</div>

                    <button
                        onClick={removeFromBasket}
                        className='checkoutProduct__button'
                        type='button'>
                        Usuń z koszyka
                    </button>
                </section>
            </div>
        </main>
    );
}
