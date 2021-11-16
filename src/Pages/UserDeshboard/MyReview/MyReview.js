import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import DeshboardNav from '../DeshboardNav/DeshboardNav';

const MyReview = () => {
    const { user } = useFirebase();
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        const urls = `https://enigmatic-meadow-52963.herokuapp.com/review`;
        console.log(urls);
        fetch(urls)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [])
    console.log(user.email);
    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <h2>All Customer Review</h2>
            <Container style={{ textAlign: 'left' }}>

                {
                    myReview.map(od => <div>
                        <b><p>{od.name}</p></b>
                        <i><p>{od.comments}</p></i>
                        <i><p>Ratings: {od.rating}</p></i>
                    </div>

                    )
                }


            </Container>
        </div >
    );
};

export default MyReview;