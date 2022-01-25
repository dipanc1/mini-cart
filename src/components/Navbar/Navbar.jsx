import React from 'react';
import './Navbar.css';

const Navbar = ({ value1, value2, product1, product2 }) => {

    const [value1Obj, setValue1Obj] = React.useState(value1);
    const [value2Obj, setValue2Obj] = React.useState(value2);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue1Obj(JSON.parse(localStorage.getItem('value1')))
            setValue2Obj(JSON.parse(localStorage.getItem('value2')))
        }, 300);
        return () => clearInterval(interval);
    })

    const [cart, setCart] = React.useState(false);
    const [cart1, noCart1] = React.useState('Cart1');
    const [cart2, noCart2] = React.useState('Cart2');

    const handleProduct1Cross = () => {
        // setValue1Obj(0);
        noCart1('noCart1');
        localStorage.setItem('value1', JSON.stringify(0));
        localStorage.setItem('product1price', JSON.stringify(0));
    }

    const handleProduct2Cross = () => {
        // setValue2Obj(0);
        noCart2('noCart2');
        localStorage.setItem('value2', JSON.stringify(0));
        localStorage.setItem('product2price', JSON.stringify(0));
    }

    const handleCart = () => {
        setCart(!cart);
    }

    return (<>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Mini Cart</a>
            <div className="counter">
                <p> {product1.currency}{(product1.price * value1Obj) + (product2.price * value2Obj)}</p>
                <p onClick={handleCart}><i className='arrow'>{cart ? '↑' : '↓'}</i>  {value1Obj + value2Obj} Items </p>
            </div>
            <div className="cart-icon" onClick={handleCart}>
                <img src="cart.png" alt="cart" height={40} width={40} />
            </div>
        </div>
        {cart && (<>
            {cart1 === 'Cart1' ?
                <div className="cart" >
                    <div className="cart-cross" onClick={handleProduct1Cross}>
                        <p className='cross'>X</p>
                    </div>
                    <div className="cart-details">
                        <div className="cart-title">
                            <h2>
                                {product1.title}
                            </h2>
                            <div className="cart-price">
                                <p>{product1.currency}</p>
                                <p>{product1.price * value1}</p>
                            </div>
                        </div>
                        <div className="cart-quantity">
                            <h2>Qty</h2>
                            <p>{value1}</p>
                        </div>
                    </div>
                </div>
                : null}
            {cart2 === 'Cart2' ?
                <div className="cart" >
                    <div className="cart-cross" onClick={handleProduct2Cross}>
                        <p className='cross'>X</p>
                    </div>
                    <div className="cart-details">
                        <div className="cart-title">
                            <h2>
                                {product2.title}
                            </h2>
                            <div className="cart-price">
                                <p>{product2.currency}</p>
                                <p>{product2.price * value2}</p>
                            </div>
                        </div>
                        <div className="cart-quantity">
                            <h2>Qty</h2>
                            <p>{value2}</p>
                        </div>
                    </div>
                </div>
                : null}
        </>)}

    </>
    );
};

export default Navbar;
