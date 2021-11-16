
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../images/reviewBanner.png'
const Review = () => {
    const reviewBg = {
        margin: '20px 0px',
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '400px',
        color: 'white',
        textAlign: 'left'
    }
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-meadow-52963.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className="my-5">
            <h1 style={{ textAlign: 'center' }}>Review</h1>
            <div>

                <Container>
                    <Row>
                        <Col md={5} className="" style={reviewBg}>
                            <h1 className="mt-4">The Neverest GMT Collection</h1>
                            <h4 className="mt-5">NORQAIN is an independent, family-operated business that was founded by a group of Swiss watch industry veterans in 2018.</h4>
                            <Link to='/addReview'>
                                <button className="mt-4 btn btn-warning">Add Review</button>
                            </Link>
                        </Col>
                        <Col md={7} className="" >
                            <div style={{ overflow: 'scroll', height: '100%' }}>
                                <h4>Customer Review</h4>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Comments</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            review.map(rev => <tr>
                                                <td>{rev.name}</td>
                                                <td>{rev.comments}</td>
                                                <td>{rev.rating}</td>
                                            </tr>)
                                        }


                                    </tbody>
                                </Table>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Review;