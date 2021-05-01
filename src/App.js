import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage.js";
import HeaderElement from "./HeaderElement";
import CheckoutPage from "./purchasing/CheckoutPage";
import LoginPage from "./LoginPage";
import PaymentPage from "./purchasing/PaymentPage";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrdersPage from "./purchasing/OrdersPage";

const promise = loadStripe(
    "pk_test_51Ilt8TAuIeD8QfYNUOLdb4w61oXpL4EC3If1K2SXHXeprcJ9HNRsus1Qzkxz36iykc1MGHKzC66iIALPVIdjkcop00CddU1BpX"
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("the user is >>>", authUser);

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });

                //the user is logged out
            }
        });
    }, []);

    return (
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <HeaderElement />
                    <HomePage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/checkout'>
                    <HeaderElement />
                    <CheckoutPage />
                </Route>
                <Route exact path='/orders'>
                    <OrdersPage />
                </Route>
                <Route exact path='/payment'>
                    <HeaderElement />
                    <Elements stripe={promise}>
                        <PaymentPage />
                    </Elements>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
