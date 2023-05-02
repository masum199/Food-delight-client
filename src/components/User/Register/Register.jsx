import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
        <h3>please Register</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" name='name' placeholder="enter your name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='Photo' placeholder="Enter Photo url" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                name="accept" 
                label="accept" />
            </Form.Group>
            <Button variant="primary" type="submit">
               register
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Already have an account?<Link to="/login">Login</Link>       
                </Form.Text>
            <Form.Text className="text-success">
                   
                </Form.Text>
            <Form.Text className="text-danger">
                   
                </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;