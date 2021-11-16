import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
const Login = () => {
    const [login, setLogin] = useState({});
    const { user, signInUser, isLoading, authError, loginWithGoogle } = useFirebase();
    const history = useHistory();
    const location = useLocation()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...login };
        newLoginData[field] = value;
        console.log(field, value);
        setLogin(newLoginData);

    }
    const handleGoogleLogin = () => {
        loginWithGoogle(location, history);
    }
    const handleLoginForm = e => {

        e.preventDefault();
        console.log(login.email, login.password);
        signInUser(login.email, login.password, location, history);

    }
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
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
                    {!isLoading && <Form onSubmit={handleLoginForm}>
                        <h1>User Login Form</h1>

                        <Form.Floating className="my-5">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                        <Form.Floating style={{ textAlign: 'left', marginTop: '30px' }}>
                            <Button type="submit" className="btn btn-success w-100">Login</Button>

                        </Form.Floating>
                        <label >
                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                                New User? Please Register.
                            </NavLink>
                        </label>

                    </Form>}
                    <Button onClick={handleGoogleLogin} type="submit" className="btn btn-success w-100">Sign in With Google</Button>

                </Col>
                <Col md={6} sm={12}>
                    {/* <img style={{ width: '100%' }} src={loginImg} alt="" srcset="" /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;