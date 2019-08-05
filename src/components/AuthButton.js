import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../services/AuthService';

const AuthButton = withRouter(props => {
    const history = props.history;
    return (
        AuthService.isAuthenticated ? (
            <span className={props.className} onClick={() => {
                AuthService.signOut(() => history.push('/'))
            }}>Logout</span>
        ) : (
            <Link to="/login" className={props.className}>Login</Link>
        )

    )
});

export default AuthButton;