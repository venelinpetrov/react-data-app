import React from 'react';
import Link from 'next/link';
import AuthService from '../services/AuthService';

const AuthButton = props => {
    const history = props.history;
    return (
        AuthService.isAuthenticated ? (
            <span className={props.className} onClick={() => {
                AuthService.signOut(() => history.push('/'))
            }}>Logout</span>
        ) : (
            <Link href="/login">
                <a className={props.className}>Login</a>
            </Link>
        )

    )
};

export default AuthButton;