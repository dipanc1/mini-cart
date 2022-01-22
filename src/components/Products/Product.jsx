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
                    Product Title
                </div>
                <div className="product-price">
                    $19.99
                </div>
                <div className="product-description">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium commodi eligendi?</p>
                </div>
            </div>
        </div>

    );
};

export default Product;
