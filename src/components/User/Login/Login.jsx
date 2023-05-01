import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        
          <div style={{height:'400px'}} className='w-50 mt-5 d-flex gap-5 container' >
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account?<Link to="/register">Register</Link>       
                    </Form.Text>
                <Form.Text className="text-success">
                       
                    </Form.Text>
                <Form.Text className="text-danger">
                       
                    </Form.Text>
            </Form>
            <div>
                
                <h2>please login</h2>
                <Button className='mt-3 w-100' variant="secondary"><FaGoogle></FaGoogle> Google</Button>
                <br />
                <Button className='mt-3 w-100' variant="secondary">github</Button>
            </div>
        </div>
      
    );
};

export default Login;