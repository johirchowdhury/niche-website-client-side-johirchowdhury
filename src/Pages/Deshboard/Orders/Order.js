import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFirebase from '../../../Hooks/useFirebase';
import Header from '../../Home/Header/Header';

const Order = () => {
    const { user } = useFirebase();
    const { serviceId } = useParams();
    const [products, setProduct] = useState({});

    const url = `https://enigmatic-meadow-52963.herokuapp.com/products/${serviceId}`;
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(products);



    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;

        setOrderInfo(newInfo);
        console.log(newInfo);
    }
    const handleBookingSubmit = e => {
        e.preventDefault();
        const orders = {
            ...orderInfo,
            email: user.email,
            productName: products.name,
            description: products.description,
            price: products.price,
            image: products.image


        }
        //send to the server
        fetch('https://enigmatic-meadow-52963.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(orders)

    }
    return (
        <div>
            <Container>
                <Header></Header>
                <Form onSubmit={handleBookingSubmit}>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control name="customerName" onBlur={handleOnBlur} type="text" value={user.displayName} placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" onBlur={handleOnBlur} name="email" value={user.email} placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" onBlur={handleOnBlur} name="phone" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="productName" value={products.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="price" value={products.price} />
                    </Form.Group>



                    <Button className="btn btn-primary" variant="primary" type="submit">
                        Order Confirm
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Order;