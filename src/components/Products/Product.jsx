import axios from 'axios';
import React, { useEffect } from 'react';
import './Product.css';
import Navbar from '../Navbar/Navbar'

const Product = () => {

    const [products, setProducts] = React.useState([]);
    const [value, setValue] = React.useState(1);

    const apiUrl = 'https://dnc0cmt2n557n.cloudfront.net/products.json';
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                // console.log(response.data);
                setProducts(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        setValue(value - 1);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (<>
        <Navbar value={value} />
        {products.map(product => (
            <div className="product" key={product.id}>
                <div className="product-image">
                    <img src={product.image} alt="product" className='image' />
                </div>
                <div className="product-details" >
                    <div className="product-title">
                        <h2>
                            {product.title}
                        </h2>
                        <p>{product.desc}</p>
                    </div>
                    <div className="product-quantity">
                        <h2 className='fab' onClick={handleMinus}>-</h2>
                        <input type="number" value={value} onChange={handleChange} className='input' />
                        <h2 className='fab' onClick={handlePlus}>+</h2>
                    </div>
                    <div className="product-price">
                        <p>{product.currency}</p>
                        <p>{product.price * value}</p>
                    </div>
                </div>
            </div>
        ))}
    </>
    );
};

export default Product;
