import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton';
import AuthButton from './AuthButton';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/admin" className="nav-item nav-link">Admin Panel</Link>
                    <AuthButton className="nav-item nav-link align-self-end"/>
                </div>
            </div>
        </nav>
    )
}

export default Header;