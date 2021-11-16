import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-meadow-52963.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className="my-5">Products</h1>
            <div className="container">
                <Row>
                    {
                        products.map(product => <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                    }

                </Row>
            </div>

        </div>
    );
};

export default HomeProducts;