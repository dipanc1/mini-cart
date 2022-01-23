import React from 'react';
import './Cart.css';

const Cart = ({value}) => {
  return (
    <>
      <div className="cart">
        <div className="cart-cross">
          <p className='cross'>X</p>
        </div>
        <div className="cart-details">
          <div className="cart-title">
            <h2>
              Product Title
            </h2>
            <p>
              $19.99
            </p>
          </div>
          <div className="cart-quantity">
            <h2>Qty</h2>
            <p>{value}</p>
          </div>
        </div>
      </div>
    </>
    );
  };
  
  export default Cart;
  