import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

const Cart = ({ value1, value2, product1, product2 }) => {

  const [cart1, noCart1] = React.useState('Cart1');
  const [cart2, noCart2] = React.useState('Cart2');

  const handleProduct1Cross = () => {
    noCart1('noCart1');
  }

  const handleProduct2Cross = () => {
    noCart2('noCart2');
  }


  return (
    <>
      <Navbar value1={value1} value2={value2} product1={product1} product2={product2} />
      {cart1 === 'Cart1' ?
        <div className="cart" >
          <div className="cart-cross">
            <p className='cross' onClick={handleProduct1Cross}>X</p>
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
    </>
  );
};

export default Cart;
