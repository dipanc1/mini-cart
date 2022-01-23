import axios from 'axios';
import React, { useEffect } from 'react';
import './Product.css';

const Product = () => {

    const [products, setProducts] = React.useState([]);

    const apiUrl = 'https://dnc0cmt2n557n.cloudfront.net/products.json';
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                setProducts(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (<>
        {products.map(product => (
            <div className="product" key={product.id}>
                <div className="product-image">
                    <img src={product.image} alt="product" className='image'/>
                </div>
                <div className="product-details" >
                    <div className="product-title">
                        <h2>
                            {product.title}
                        </h2>
                        <p>{product.desc}</p>
                    </div>
                    <div className="product-quantity">
                        <h2 className='fab'>-</h2>
                        <input type="number" min="1" max="9999" className='input' />
                        <h2 className='fab'>+</h2>
                    </div>
                    <div className="product-price">
                        <p>{product.currency}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        ))}
    </>
    );
};

export default Product;
