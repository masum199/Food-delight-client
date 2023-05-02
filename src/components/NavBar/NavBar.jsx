import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png.jpg';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" className="navbar">
                    <Container>
                        <Navbar.Brand className="navbar-brand fw-bold fs-2 ">Foodie Delight</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto gap-4">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/blog" className="nav-link">Blog</Link>
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link to="/register" className="nav-link">Register</Link>
                            </Nav>
                            <Nav>
                                <Button variant="danger" className="nav-button"><Link to="/login" className="nav-link">Login</Link></Button>

                                
                            </Nav>
                            <img src={user} alt="" className="nav-user" />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;