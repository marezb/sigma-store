//npm i react-currency-format
import React from 'react';
import './Total.scss';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

function Total() {
    const [{ basket }, dispatch] = useStateValue();

    const total = getBasketTotal(basket);
    const format = {
        style: 'currency',
        currency: 'PLN',
    };
    const localization = navigator.language;
    const formattedTotal = new Intl.NumberFormat(localization, format).format(total);

    return (
        <div className='subtotal'>
            <p>
                Ilość produktów: <strong>{basket.length}</strong>
            </p>
            <p>
                Suma: <strong>{formattedTotal}</strong>
            </p>
            <button>Do kasy</button>
        </div>
    );
}

export default Total;
