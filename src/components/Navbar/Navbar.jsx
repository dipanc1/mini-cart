import React from 'react';
import Cart from '../Cart/Cart';
import './Navbar.css';

const Navbar = ({ value1, value2, product1, product2 }) => {

    const [cart, setCart] = React.useState(false);

    const handleCart = () => {
        setCart(!cart);
    }

    return (<>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Mini Cart</a>
            <div className="counter">
                <p> {product1.currency}{(product1.price * value1) + (product2.price * value2)}</p>
                <p onClick={handleCart}><i className='arrow'>{cart ? '↑' : '↓'}</i>  {value1 + value2} Items </p>
            </div>
            <div className="cart-icon" onClick={handleCart}>
                <img src="cart.png" alt="cart" height={40} width={40} />
            </div>
        </div>
        {cart && (<Cart value1={value1} value2={value2} product1={product1} product2={product2} />)}

    </>
    );
};

export default Navbar;
