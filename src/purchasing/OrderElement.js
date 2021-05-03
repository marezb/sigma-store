import React from "react";
import CheckoutProductElement from "./CheckoutProductElement";
import "./OrderElement.scss";
import { formatPrice } from "../helperFunctions";

function convertDate(date) {
    const localization = navigator.language;
    return `${new Date(date * 1000).toLocaleString()}`;
}
console.log(convertDate(1619941074));

function OrderElement({ order }) {
    return (
        <div className='order'>
            <div className='order__info'>
                <h3>
                    Zamówienie numer: <span className='order__details'>{order.id}</span>
                </h3>
                <h3>
                    Data zamówienia:{" "}
                    <span className='order__details'>
                        {convertDate(order.data.created)}
                    </span>{" "}
                </h3>
                <h3>
                    Wartość zamówienia:{" "}
                    <span className='order__details'>
                        {formatPrice(order.data.amount / 100)}
                    </span>{" "}
                </h3>
            </div>
            {order.data.basket?.map((product) => {
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
                    />
                );
            })}
        </div>
    );
}

export default OrderElement;
