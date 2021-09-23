import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <nav className='navbar'>
                    <a href="./shop">Shop</a>
                    <a href="./order">Order Review</a>
                    <a href="./inventory">Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;