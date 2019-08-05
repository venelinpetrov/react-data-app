import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton';
import AuthButton from './AuthButton';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Admin Panel</Link>
                    </li>
                    <li className="nav-item">
                        <AuthButton className="nav-link"/>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Header;