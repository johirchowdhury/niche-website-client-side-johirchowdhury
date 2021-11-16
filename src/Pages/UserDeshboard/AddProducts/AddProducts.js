import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
// import useFirebase from '../../../Hooks/useFirebase';
import DeshboardNav from '../DeshboardNav/DeshboardNav'

const AddProducts = () => {

    // const { user } = useFirebase();
    const [bookingInfo, setBookingInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;

        setBookingInfo(newInfo);
        console.log(newInfo);
    }
    const handleBookingSubmit = e => {
        e.preventDefault();

        //send to the server
        fetch('https://enigmatic-meadow-52963.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(bookingInfo)

    }

    return (

        <div>
            <DeshboardNav></DeshboardNav>
            <Container style={{ textAlign: 'left' }}>
                <h2>Add New Products</h2>
                <Form onSubmit={handleBookingSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" onBlur={handleOnBlur} name="name" placeholder="Product Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDes">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onBlur={handleOnBlur} name="price" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" onBlur={handleOnBlur} name="description" rows={3} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="text" onBlur={handleOnBlur} name="image" placeholder="Product Image" />
                    </Form.Group>


                    <Button class="btn btn-primary" type="submit" variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProducts;