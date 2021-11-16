// import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useFirebase from '../../../Hooks/useFirebase';

// const DeshboarHeader = () => {
//     const { user, logOut } = useFirebase();

//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
//             <Container>
//                 <Navbar.Brand href="#home">JACS Watch World</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Link to='/product'>
//                             <button style={{ color: 'white' }} className='btn'>Product</button>
//                         </Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>

//                     </Nav>
//                     <Nav>
//                         {
//                             user?.email ?
//                                 <div>
//                                     <Link to='/deshboard'>
//                                         <button style={{ color: 'white' }} className='btn'>Deshboard</button>
//                                     </Link>
//                                     <Link to='/addProducts'>
//                                         <button style={{ color: 'white' }} className='btn'>Add Product</button>
//                                     </Link>
//                                     <button onClick={logOut} style={{ color: 'white' }} className='btn'>{user.displayName} LogOut</button>
//                                 </div>
//                                 :
//                                 <Link to='/login'>
//                                     <button style={{ color: 'white' }} className='btn'>Login</button>
//                                 </Link>
//                         }
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default DeshboarHeader;