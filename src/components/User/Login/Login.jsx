import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
const {user,signIn,googleLogin , githubLogin} = useContext(AuthContext)

const handleSignIn = event =>{
  event.preventDefault()
  const form = event.target
  const email = form.email.value
  const password = form.password.value
  signIn(email, password)
  .then(result =>{
   const loggedIn = result.user
   console.log(loggedIn)
  })
  .catch(error =>{
    console.log(error)
  })
}

const handleGoogleLogin =() =>{
 
  googleLogin()
 .then(result =>{
    const loggedIn = result.user
    console.log(loggedIn)
  })
  .catch(error =>{
    console.log(error)
  })
 
}
const handleGitLogIn = () =>{
  githubLogin()
  .then(result =>{
    const loggedIn = result.user
    console.log(loggedIn)
  })
  .catch(error =>{
    console.log(error)
  })
}

  return (
    <div  className=' d-flex gap-5 container w-50'>
      <Form onSubmit={handleSignIn}  className='form-login p-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account?<Link to="/register">Register</Link>
        </Form.Text>
      </Form>
      <div className='p-5 login-button'>
        <h2>Or Login</h2>
        <p>Login to get access to the chief <br />best recipes</p>
        <Button onClick={handleGoogleLogin} className='mt-3 w-100' variant="secondary"><FaGoogle /> Login with Google</Button>
        <br />
        <Button onClick={handleGitLogIn} className='mt-3 w-100' variant="secondary"><FaGithub /> Login with Github</Button>
      </div>
    </div>
  );
};

export default Login;