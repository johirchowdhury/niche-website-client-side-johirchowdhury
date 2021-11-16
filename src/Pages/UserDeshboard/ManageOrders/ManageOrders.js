import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import DeshboardNav from '../DeshboardNav/DeshboardNav';

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        const urls = `https://enigmatic-meadow-52963.herokuapp.com/orders`;

        fetch(urls)
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [])
    const handleDelete = id => {
        const url = `https://enigmatic-meadow-52963.herokuapp.com/orders/${id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.deletedCount) {
                alert("Data Successfully Deleted");
                const remaining = manageOrder.filter(product => product._id !== id);
                setManageOrder(remaining);
                // }
            })

    }
    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <h2>Manage All Orders</h2>
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
                            manageOrder.map(od => <tr>
                                <td>{od.productName}</td>
                                <td>{od.description.slice(0, 200)}</td>
                                <td>{od.price}</td>
                                <td>Action</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(od._id)}>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrders;