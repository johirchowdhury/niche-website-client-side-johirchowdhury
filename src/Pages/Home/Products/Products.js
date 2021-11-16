import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-meadow-52963.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h1 className="my-5">Products</h1>
            <div className="container">
                <Row>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }

                </Row>
            </div>

        </div>
    );
};

export default Products;