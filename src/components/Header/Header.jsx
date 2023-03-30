import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1>Wisdom Wolf</h1>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user-profile-pic" />
        </nav>
    );
};

export default Header;