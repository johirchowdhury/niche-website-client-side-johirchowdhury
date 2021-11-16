import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import Header from '../Header/Header';

const AddReview = () => {
    const { user } = useFirebase();
    const [reviewInfo, setReviewInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;

        setReviewInfo(newInfo);
        console.log(newInfo);
    }
    const handleBookingSubmit = e => {
        e.preventDefault();
        const reviewData = {
            name: user.displayName,
            email: user.email,
            comments: reviewInfo.comments,
            rating: reviewInfo.rating

        }
        //send to the server
        fetch('https://enigmatic-meadow-52963.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(reviewData)

    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Col md={6} className="my-5 mx-auto">

                    <Form onSubmit={handleBookingSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name="name" onBlur={handleOnBlur} value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onBlur={handleOnBlur} name="email" value={user.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name="comments" as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" placeholder="Rating" onBlur={handleOnBlur} name="rating" />
                        </Form.Group>
                        <Button type="submit" className="btn btn-primary">Review</Button>
                    </Form>
                </Col>
            </Container>
        </div>
    );
};

export default AddReview;