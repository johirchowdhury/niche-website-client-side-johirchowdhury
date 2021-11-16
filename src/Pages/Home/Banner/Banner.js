import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Available NoW</h3>
                    <p>The stories in Volume 9 celebrate rebels and renegades from Lagos to Los Angeles, challenging everyone who loves horology to reconsider their assumptions.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Low-Impact Watchmaking For A Changing World</h3>
                    <p>Like every industry, ours is trying to improve. Where does greenwashing leave off, and real change begin?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Snuck Into Space</h3>
                    <p>The daughter of astronaut Jerry Carr says she has a Movado that rewrites horological history.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>SoHo Stories </h3>
                    <p>Eight real women pair show-stopping fashion with some of the year's best</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;