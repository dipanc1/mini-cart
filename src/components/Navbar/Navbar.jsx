import React from 'react';
import './Navbar.css';

const Navbar = ({ value }) => {

    return (
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Mini Cart</a>
            <div className="cart-icon"><img src="cart.png" alt="cart" height={40} width={40} />
                <div className="counter" style={{ height: value >= 99 ? '30px' : '20px', width: value >= 99 ? '30px' : '20px'}}>{value}</div>
            </div>
        </div>
    );
};

export default Navbar;
