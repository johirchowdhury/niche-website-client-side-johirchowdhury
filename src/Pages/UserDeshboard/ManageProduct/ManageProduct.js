
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DeshboardNav from '../DeshboardNav/DeshboardNav';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-meadow-52963.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    const handleDelete = id => {
        const url = `https://enigmatic-meadow-52963.herokuapp.com/products/${id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.deletedCount) {
                alert("Data Successfully Deleted");
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                // }
            })

    }
    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <h1 className="my-5">Manage All Products</h1>
            <div className="container">
                <Row>
                    {
                        products.map(product => <Col xs={6} md={4} style={{ marginBottom: '15px' }}>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Title>Price: {product.price}</Card.Title>
                                    <Card.Text>
                                        {product.description.slice(0, 100)}
                                    </Card.Text>

                                    <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>

                                </Card.Body>
                            </Card>
                        </Col>)
                    }


                </Row>
            </div>
        </div >
    );
};

export default ManageProduct;