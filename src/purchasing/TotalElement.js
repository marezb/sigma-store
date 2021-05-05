//npm i react-currency-format
import React from "react";
import "./TotalElement.scss";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";
import { formatPrice } from "../helperFunctions";

function TotalElement() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const total = getBasketTotal(basket);

    return (
        <div className='subtotal'>
            <p>
                Ilość produktów: <strong>{basket.length}</strong>
            </p>
            <p>
                Suma: <strong>{formatPrice(total)}</strong>
            </p>
            {user ? (
                <button onClick={(e) => history.push("/payment")}>Do kasy</button>
            ) : (
                "Aby móc zapłacić - zaloguj się."
            )}
        </div>
    );
}

export default TotalElement;
