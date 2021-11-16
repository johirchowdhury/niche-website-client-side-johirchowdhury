import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const DeshboardNav = () => {
    const { user, logOut, admin } = useFirebase();

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',

    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Link to='/userDeshboard'><Navbar.Brand>JACT Watch World</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link style={linkStyle} to='/pay'>Pay</Link></Nav.Link>
                        <Nav.Link><Link style={linkStyle} to='/myorder'>My Order</Link></Nav.Link>
                        <Nav.Link><Link style={linkStyle} to='/review'>Review</Link></Nav.Link>

                        {admin &&
                            <nav style={{ display: 'inline-block' }}>
                                <Nav.Link style={{ float: 'left' }}><Link style={linkStyle} to='/AddProducts'>Add Product</Link></Nav.Link>
                                <Nav.Link style={{ float: 'left' }}><Link style={linkStyle} to='/manageOrders'>Manage All Orders</Link></Nav.Link>
                                <Nav.Link style={{ float: 'left' }}><Link style={linkStyle} to='/manageProduct'>Manage Products</Link></Nav.Link>
                                <Nav.Link style={{ float: 'left' }}><Link style={linkStyle} to='/makeadmin'>Make A Admin</Link></Nav.Link>

                            </nav>
                        }
                    </Nav>
                    <NavDropdown className="btn btn-danger text-white" title="My Profile" id="collasible-nav-dropdown">

                        <NavDropdown.Item href="#" >{user.displayName}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">{user.email}</NavDropdown.Item>
                        <NavDropdown.Item href="#"><button onClick={logOut} style={{ color: 'black' }} className='btn'>LogOut</button></NavDropdown.Item>

                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default DeshboardNav;