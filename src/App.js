import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Master from './pages/Master';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './pages/Admin';
import NoMach from './pages/NoMach';
import ProtectedRoute from './components/ProtectedRoute';

import './app.css';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Master} />
                <Route path="/details/:id" component={Details} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/admin" component={Admin} />
                <Route component={NoMach} />
            </Switch>
        </div>
    );
}

export default App;
