import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png.jpg'

const NavBar = () => {
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Food Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto gap-4">
                                <Link to="/">Home</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                                <img style={{width:'25px'}} src={user} alt="" />

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;