import React from 'react';
import DeshboardNav from '../DeshboardNav/DeshboardNav';
import img from '../../../images/welcome-paper-poster-with-colorful-brush-strokes-vector-21849225.jpg'
import { Image } from 'react-bootstrap';
const UserDeshboard = () => {
    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <Image src={img} />

        </div>
    );
};

export default UserDeshboard;