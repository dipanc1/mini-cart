import React from 'react';
import Cart from '../Cart/Cart';
import './Navbar.css';

const Navbar = ({ value, products }) => {

    const [cart, setCart] = React.useState('noCart');

    const handleCart = () => {
        setCart('cart');
    }

    return (<>
        {cart === 'noCart' ?
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Mini Cart</a>
                <div className="cart-icon" onClick={handleCart}>
                    <img src="cart.png" alt="cart" height={40} width={40} />
                    <div className="counter" style={{ height: value >= 99 ? '30px' : '20px', width: value >= 99 ? '30px' : '20px' }}>{value}</div>
                </div>
            </div>
            : <Cart value={value}/>}
    </>
    );
};

export default Navbar;
