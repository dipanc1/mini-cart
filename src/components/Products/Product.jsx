import axios from 'axios';
import React, { useEffect } from 'react';
import './Product.css';
import Navbar from '../Navbar/Navbar'

const Product = () => {

    const valueObj1 = JSON.parse(localStorage.getItem('value1')) || 1;
    const valueObj2 = JSON.parse(localStorage.getItem('value2')) || 1;
    const productObj1 = JSON.parse(localStorage.getItem('product1price')) || [];
    const productObj2 = JSON.parse(localStorage.getItem('product2price')) || [];

    const [product1, setProduct1] = React.useState(productObj1);
    const [product2, setProduct2] = React.useState(productObj2);
    const [value1, setValue1] = React.useState(valueObj1);
    const [value2, setValue2] = React.useState(valueObj2);

    const apiUrl = 'https://dnc0cmt2n557n.cloudfront.net/products.json';
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                // console.log(response.data);
                setProduct1(response.data.products[0]);
                setProduct2(response.data.products[1]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        // if (JSON.parse(localStorage.getItem('value1')) === 1) {
        // return;
        // }
        // else {
        localStorage.setItem('value1', JSON.stringify(value1));
        localStorage.setItem('value2', JSON.stringify(value2));
        localStorage.setItem('product1price', JSON.stringify(product1.price * value1));
        localStorage.setItem('product2price', JSON.stringify(product2.price * value2));
        // }

    }, [value1, value2, product1, product2]);


    const handlePlus1 = () => {
        setValue1(value1 + 1);
    }

    const handleMinus1 = () => {
        setValue1(value1 - 1);
    }

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    }

    const handlePlus2 = () => {
        setValue2(value2 + 1);
    }

    const handleMinus2 = () => {
        setValue2(value2 - 1);
    }

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    return (<>
        <Navbar value1={value1} value2={value2} product1={product1} product2={product2} />
        <div className="product">
            <div className="product-image">
                <img src={product1.image} alt="product" className='image' />
            </div>
            <div className="product-details" >
                <div className="product-title">
                    <h2>
                        {product1.title}
                    </h2>
                    <p>{product1.desc}</p>
                </div>
                <div className="product-quantity">
                    <h2 className='fab' onClick={handleMinus1}>-</h2>
                    <input type="number" value={valueObj1} onChange={handleChange1} className='input' />
                    <h2 className='fab' onClick={handlePlus1}>+</h2>
                </div>
                <div className="product-price">
                    <p>{product1.currency}</p>
                    <p>{productObj1}</p>
                </div>
            </div>
        </div>
        <div className="product" key={product2.id}>
            <div className="product-image">
                <img src={product2.image} alt="product" className='image' />
            </div>
            <div className="product-details" >
                <div className="product-title">
                    <h2>
                        {product2.title}
                    </h2>
                    <p>{product2.desc}</p>
                </div>
                <div className="product-quantity">
                    <h2 className='fab' onClick={handleMinus2}>-</h2>
                    <input type="number" value={valueObj2} onChange={handleChange2} className='input' />
                    <h2 className='fab' onClick={handlePlus2}>+</h2>
                </div>
                <div className="product-price">
                    <p>{product2.currency}</p>
                    <p>{productObj2}</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Product;
