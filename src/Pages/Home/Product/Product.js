import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { _id, name, price, description, image } = props.product;
    return (

        <Col xs={6} md={4} style={{ marginBottom: '15px' }}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/productDetails/${_id}`}>
                        <Button className="btn btn-success" variant="primary">Order</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Product;