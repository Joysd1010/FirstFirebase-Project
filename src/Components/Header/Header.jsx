import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex flex-row justify-around'>
            <Link to={'/'} className='mx-2'>Home</Link>
            <Link to={'/login'} className='mx-2'>Login </Link>
            <Link to={'/loginEmail'} className='mx-2'>Register</Link>
            <Link to={'/loginRbs'} className='mx-2'>RegisterRBS</Link>
        </div>
    );
};

export default Header;