import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>

                <Link to="/home">
                    <a style={{ color: 'white', fontSize: '22px' }} className="btn">JACS Watch World</a>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/product'>
                            <button style={{ color: 'white' }} className='btn'>Product</button>
                        </Link>
                    </Nav>
                    <Nav>
                        {
                            user?.email ?
                                <div>
                                    <Link to='/userDeshboard'>
                                        <button style={{ color: 'white' }} className='btn'>Deshboard</button>
                                    </Link>
                                    <Link to='/addProducts'>
                                        <button style={{ color: 'white' }} className='btn'>Add Product</button>
                                    </Link>
                                    <button onClick={logOut} style={{ color: 'white' }} className='btn'><b>{user.displayName}-</b> LogOut</button>
                                </div>
                                :
                                <Link to='/login'>
                                    <button style={{ color: 'white' }} className='btn'>Login</button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;