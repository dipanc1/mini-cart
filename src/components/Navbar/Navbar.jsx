import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Mini Cart</a>
            <div className="cart"><img src="cart.png" alt="cart" height={40} width={40}/>
            <div className="counter">2</div>
            </div>
        </div>
    );
};

export default Navbar;
