
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const ProductDetails = () => {
    const { serviceId } = useParams();
    const [products, setProduct] = useState({});

    const url = `https://enigmatic-meadow-52963.herokuapp.com/products/${serviceId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <div className="w-50 mx-auto my-3">
                <img style={{ height: '300px' }} className="img-fluid" src={products.image} alt="" />
                <h3>{products.name}</h3>
                <h5>Price: {products.price}</h5>
                <p className="px-3">{products.description}</p>


                <Link to={`/orders/${serviceId}`}>
                    <button className="btn btn-primary">Place Order </button>
                </Link>


            </div>
        </div>
    );
};

export default ProductDetails;