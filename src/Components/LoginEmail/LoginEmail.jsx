import React from 'react';
import { Link } from 'react-router-dom';

const LoginEmail = () => {
    return (
        <div>
            <div>
                Login with your email and password
                
            </div><button className='btn btn-warning'><Link to={'/register'}>New user Register</Link></button>
        </div>
    );
};

export default LoginEmail;