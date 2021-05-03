//npm i react-currency-format
import React from "react";
import "./TotalElement.scss";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";
import { formatPrice } from "../helperFunctions";

function TotalElement() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const total = getBasketTotal(basket);

    return (
        <div className='subtotal'>
            <p>
                Ilość produktów: <strong>{basket.length}</strong>
            </p>
            <p>
                Suma: <strong>{formatPrice(total)}</strong>
            </p>
            <button onClick={(e) => history.push("/payment")}>Do kasy</button>
        </div>
    );
}

export default TotalElement;
