import React from 'react';
import { Button,Form } from 'react-bootstrap';
import './style.css';


const SignIn =()=> {
  return (
    <div class="signin">
        <Form>
        <Form.Group class="mb-3" controlId="formBasicname">
    <Form.Label>Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
   </Form.Group>

  <Form.Group class="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address : </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   </Form.Group>

  <Form.Group class="mb-3" controlId="formBasicPassword">
    <Form.Label>Password : </Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    <div class='button'>
  <Button  variant="primary" type="submit">
    Sign In
  </Button>
  </div>
</Form>
    </div>
  )
}

export default SignIn;