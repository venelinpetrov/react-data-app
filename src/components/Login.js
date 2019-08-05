import React from 'react';
import AuthService from '../services/AuthService';

const Login = ({history, location}) => {
    let { from } = location.state || { from: {pathname: '/'}};
    return (
        <div>
            <h2>Login</h2>
            <button className="btn btn-primary" onClick={() => {
                AuthService.authenticate(() => history.push(from))}
            }>
                Login
            </button>
            <button className="btn btn-secondary" onClick={() => history.push('/')}>Cancel</button>
        </div>
    )
};

export default Login;