import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../services/AuthService';

const AuthButton = withRouter(props => {
    const history = props.history;
    return (
        AuthService.isAuthenticated ? (
            <span {...props} onClick={() => {
                AuthService.signOut(() => history.push('/'))
            }}>Logout</span>
        ) : (
            <Link to="/login" {...props}>Login</Link >
        )

    )
});

export default AuthButton;