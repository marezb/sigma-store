import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';

function App() {
    return (
        <div className='App'>
            <Header></Header>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path='/checkout'>
                    <Checkout></Checkout>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
