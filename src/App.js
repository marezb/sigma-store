import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage.js';
import HeaderElement from './HeaderElement';
import CheckoutPage from './checkoutPage/CheckoutPage';
import LoginPage from './LoginPage';

function App() {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_apiKey,
        authDomain: process.env.REACT_APP_FIREBASE_authDomain,
        projectId: process.env.REACT_APP_FIREBASE_projectId,
        storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
        messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
        appId: process.env.REACT_APP_FIREBASE_appId,
        measurementId: process.env.REACT_APP_FIREBASE_measurementId,
    };
    console.log('firebaseConfig', firebaseConfig);

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
                    <CheckoutPage></CheckoutPage>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
