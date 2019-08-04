import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Master from './pages/Master';
import Details from './pages/Details';
import './app.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    );
}

export default App;
