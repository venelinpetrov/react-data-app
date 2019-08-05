import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './AuthButton';
import AuthButton from './AuthButton';

const Header = withRouter(({match, location}) => {
    console.log(match, location)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to="/admin" className="nav-link" activeClassName="active">Admin Panel</NavLink>
                    <AuthButton className="nav-link" activeClassName="active"/>
                </div>
            </div>
        </nav>
    )
})

export default Header;