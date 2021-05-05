import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage.js";
import HeaderElement from "./HeaderElement";
import CheckoutPage from "./purchasing/CheckoutPage";
import LoginPage from "./LoginPage";
import PaymentPage from "./purchasing/PaymentPage";
import CategoriesElement from "./CategoriesElement";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrdersPage from "./purchasing/OrdersPage";

import allProducts from "./AllProducts";

const promise = loadStripe(
    "pk_test_51Ilt8TAuIeD8QfYNUOLdb4w61oXpL4EC3If1K2SXHXeprcJ9HNRsus1Qzkxz36iykc1MGHKzC66iIALPVIdjkcop00CddU1BpX"
);

function App() {
    const [products, setProducts] = useState(allProducts);
    const [search, setSearch] = useState("");
    console.log("App | search", search);
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

    useEffect(() => {
        const results = allProducts.filter(
            (product) =>
                product.desc.toLowerCase().includes(search.toLocaleLowerCase()) ||
                product.title.toLowerCase().includes(search.toLocaleLowerCase())
        );
        setProducts(results);
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <HeaderElement
                        searchInput={true}
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CategoriesElement />

                    <HomePage products={products} />
                </Route>
                <Route exact path='/szkolenia'>
                    <HeaderElement
                        searchInput={true}
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CategoriesElement />
                    <HomePage category={"szkolenie"} products={products} />
                </Route>
                <Route exact path='/sprzet'>
                    <HeaderElement
                        searchInput={true}
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CategoriesElement />
                    <HomePage category={"sprzet"} products={products} />
                </Route>

                <Route exact path='/oprogramowanie'>
                    <HeaderElement
                        searchInput={true}
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CategoriesElement />
                    <HomePage category={"oprogramowanie"} products={products} />
                </Route>
                <Route exact path='/uslugi'>
                    <HeaderElement
                        searchInput={true}
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CategoriesElement />
                    <HomePage category={"usluga"} products={products} />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/checkout'>
                    <HeaderElement
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <CheckoutPage />
                </Route>
                <Route exact path='/orders'>
                    <HeaderElement
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <OrdersPage />
                </Route>
                <Route exact path='/payment'>
                    <HeaderElement
                        handleChange={handleChange}
                        placeholder='Szukaj produktów'
                    />
                    <Elements stripe={promise}>
                        <PaymentPage />
                    </Elements>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
