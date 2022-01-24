import React from 'react';
import Cart from '../Cart/Cart';
import './Navbar.css';

const Navbar = ({ value1, value2, product1, product2 }) => {

    const [cart, setCart] = React.useState('noCart');

    const handleCart = () => {
        setCart("cart");
    }

    return (<>
        {cart === 'noCart' ?
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Mini Cart</a>
                <div className="cart-icon" onClick={handleCart}>
                    <div className="counter">
                    <p>{product1.currency}</p>
                    <p>{(product1.price * value1)+(product2.price * value2)}</p>
                        <p>{value1 + value2} Items</p>
                    </div>
                    <img src="cart.png" alt="cart" height={40} width={40} />
                </div>
            </div>
            : <Cart value1={value1} value2={value2} product1={product1} product2={product2} />
        }
    </>
    );
};

export default Navbar;
