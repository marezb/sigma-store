import React from 'react';
import './Checkout.scss';
import Total from './Total';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <h2 className='checkout__title'>Twój koszyk</h2>
                {/* basket item */}
            </div>
            <div className='checkout__right'>
                <Total />
            </div>
        </div>
    );
}

export default Checkout;
