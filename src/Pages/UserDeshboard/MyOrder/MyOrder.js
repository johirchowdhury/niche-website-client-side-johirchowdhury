
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import DeshboardNav from '../DeshboardNav/DeshboardNav';

const MyOrder = () => {
    const { user } = useFirebase();
    const [myOrder, setMyOrder] = useState([]);
    // console.log(user.email);
    useEffect(() => {
        const url = `http://enigmatic-meadow-52963.herokuapp.com/myorder?email=${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])



    const handleDelete = id => {
        const url = `http://enigmatic-meadow-52963.herokuapp.com/myorder/${id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.deletedCount) {
                alert("Data Successfully Deleted");
                const remaining = myOrder.filter(product => product._id !== id);
                setMyOrder(remaining);
                // }
            })

    }

    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <h2>Number of Order: {myOrder.length}</h2>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map(od => <tr>
                                <td>{od.productName}</td>
                                <td>{od.description.slice(0, 200)}</td>
                                <td>{od.price}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(od._id)}>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrder;