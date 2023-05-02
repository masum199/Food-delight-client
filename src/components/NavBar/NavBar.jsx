import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png.jpg';
import './NavBar.css';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

  
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
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
                            </Nav>
                            <Nav>
                                {user ?
                                    <>
                                        <img className='nav-user' src={user?.photoURL} alt="" title={user?.displayName} />
                                        <Button onClick={handleLogOut} variant="secondary">LogOut</Button>
                                    </> :
                                    <Link to='/login'>
                                        <Button variant="secondary">LogIn</Button>
                                    </Link>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;