import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import DeshboardNav from '../DeshboardNav/DeshboardNav';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://enigmatic-meadow-52963.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <div>
            <DeshboardNav></DeshboardNav>
            <Container>
                <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" onBlur={handleOnBlur} name="emal" placeholder="Email" />
                    </Form.Group>


                    <Button class="btn btn-primary" type="submit" variant="primary">
                        Make A Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;