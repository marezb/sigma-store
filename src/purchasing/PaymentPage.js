import React, { useState, useEffect } from "react";
import "./PaymentPage.scss";
import { useStateValue } from "../StateProvider";
import CheckoutProductElement from "./CheckoutProductElement";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { formatPrice } from "../helperFunctions";
import axios from "../axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from "../firebase";

function PaymentPage() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const total = getBasketTotal(basket);

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    //stripe needs a clientsecret to process a transaction
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        //whenever basket change we need new clientSecret from stripe
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits
                // if we are using zl we need to provide value in groszy thats why *100
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("THE SECRET IS >>>", clientSecret);
    console.log("👱", user);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation from stripe

                // db.collection("users")
                //     .doc(user?.uid)
                //     .collection("orders")
                //     .doc(paymentIntent.id)
                //     .set({
                //         basket: basket,
                //         amount: paymentIntent.amount,
                //         created: paymentIntent.created,
                //     });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                history.replace("/orders");
            });
    };

    const handleChange = (e) => {
        //listen for changes on CardElement and display any errros as the customer types their card details<<

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

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
            />
        );
    });

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Twój koszyk (
                    <Link to='/checkout'>Liczba produków: {basket?.length}</Link>)
                </h1>

                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h2>Adres dostawy:</h2>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h2>Twoje produkty:</h2>
                    </div>
                    <div className='payment__items'>{showProducts}</div>
                </div>

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h2>Metoda płatności:</h2>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement
                                className='cardElement'
                                onChange={handleChange}></CardElement>
                            <div className='payment__priceContainer'>
                                Wartość zamówienia: {formatPrice(total)}
                            </div>
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {" "}
                                    {processing ? <p>Processing</p> : "Kup teraz"}
                                </span>
                            </button>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
