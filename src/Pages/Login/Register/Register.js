import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const Register = () => {

    const [login, setLogin] = useState({});
    const { user, registerUser, isLoading, authError, history } = useFirebase();
    const handleOnChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...login };
        newLoginData[field] = value;
        setLogin(newLoginData);

    }
    const handleLoginForm = e => {
        console.log(login.email, login.password);
        if (login.password !== login.password2) {
            alert("New User");
            return
        }

        registerUser(login.email, login.password, login.name, history);
        e.preventDefault()

    }
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <h2>Registration</h2>
                    {!isLoading && <Form onSubmit={handleLoginForm}>
                        <Form.Floating className="my-5" >
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                name="name"
                                onBlur={handleOnChange}
                                placeholder="Your Name"
                            />
                            <label htmlFor="floatingInputCustom">Name</label>
                        </Form.Floating>
                        <Form.Floating className="my-5" >
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                        <Form.Floating className="my-5">
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password2"
                                onBlur={handleOnChange}
                                placeholder="Re-enter Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Re-enter Your Password</label>
                        </Form.Floating>
                        <Form.Floating style={{ textAlign: 'left', marginTop: '30px' }}>
                            <Button type="submit" className="btn btn-success w-100">Register</Button>

                        </Form.Floating>
                        <label >
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                Already Register? Please sign In.
                            </NavLink>
                        </label>
                    </Form>}
                    {
                        isLoading && <Spinner animation="grow" />
                    }
                    {
                        user?.email && <Alert className="alert alert-success">
                            User Created Successfully
                        </Alert>
                    }
                    {
                        authError && <Alert className="alert alert-danger">
                            {authError}
                        </Alert>
                    }
                </Col>
                <Col md={6} sm={12}>
                    {/* <img style={{ width: '100%' }} src={loginImg} alt="" srcset="" /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default Register;