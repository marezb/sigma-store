import React from "react";
import "./CheckoutPage.scss";
import TotalElement from "./TotalElement";
import { useStateValue } from "../StateProvider";
import CheckoutProductElement from "./CheckoutProductElement";

function CheckoutPage() {
    const [{ basket, user }, dispatch] = useStateValue();

    const showProducts = basket.map((product) => {
        const { uniqueID, id, image, title, desc, time, price } = product;
        return (
            <CheckoutProductElement
                key={uniqueID}
                uniqueID={uniqueID}
                id={id}
                image={image}
                title={title}
                desc={desc}
                time={time}
                price={price}
                button={true}
            />
        );
    });

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <h2>Witaj, {user?.email}</h2>
                <h2 className='checkout__title'>Twój koszyk</h2>
                {showProducts}
                {/* basket item */}
            </div>
            <div className='checkout__right'>
                <TotalElement />
            </div>
        </div>
    );
}

export default CheckoutPage;
