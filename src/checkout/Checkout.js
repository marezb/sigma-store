import React from 'react';
import './Checkout.scss';
import Total from './Total';
import { useStateValue } from '../StateProvider';
import CheckoutProductWidget from './CheckoutProductWidget';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    const showProducts = basket.map(product => {
        const { uniqueID, id, image, title, desc, time, price } = product;
        return (
            <CheckoutProductWidget
                key={uniqueID}
                uniqueID={uniqueID}
                id={id}
                image={image}
                title={title}
                desc={desc}
                time={time}
                price={price}
            />
        );
    });

    return (
        <div className='checkout'>
            <h2 className='checkout__title'>Twój koszyk</h2>
            <div className='checkout__left'>
                {showProducts}
                {/* basket item */}
            </div>
            <div className='checkout__right'>
                <Total />
            </div>
        </div>
    );
}

export default Checkout;
