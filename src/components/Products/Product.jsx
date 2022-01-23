import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <div className="product-image">
                <img src="img.jpg" alt="product" />
            </div>
            <div className="product-details">
                <div className="product-title">
                    <h2>
                        Product Title
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium commodi eligendi?</p>
                </div>
                <div className="product-quantity">
                    <h2>-</h2>
                    <input type="number" min="1" max="9999" className='input'/>
                    <h2>+</h2>
                </div>
                <div className="product-price">
                    $19.99
                </div>
            </div>
        </div>

    );
};

export default Product;
