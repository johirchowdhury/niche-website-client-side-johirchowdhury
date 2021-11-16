import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../images/sectionBanner.png'
const NewestCollection = () => {
    const reviewBg = {
        background: `url(${bg})`, minHeight: '400px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'left'
    }
    return (
        <div style={reviewBg}>
            <Container>
                <Row>
                    <Col md={6} >
                        <h1 className="mt-4">The Neverest GMT Collection</h1>
                        <h4 className="mt-5">NORQAIN is an independent, family-operated business that was founded by a group of Swiss watch industry veterans in 2018.</h4>
                        <Link to='/products'>
                            <button className="mt-4 btn btn-warning">Shop Now</button>
                        </Link>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewestCollection;