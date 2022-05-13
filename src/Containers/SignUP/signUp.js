import React from 'react'
import {Button, Form } from 'react-bootstrap';
import './style1.css';

const SignUp =()=> {
 
  return (
    <div class="signUp">
        <Form >
        <Form.Group class="lable" controlId="formBasicfname">
    <Form.Label> First Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter first name" />
   </Form.Group>

   <Form.Group class="lable" controlId="formBasiclname">
    <Form.Label> Last Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter last name" />
   </Form.Group>

   <Form.Group class="lable" controlId="formBasicpassword">
    <Form.Label> Password : </Form.Label>
    <Form.Control type="text" placeholder="Enter Password" />
   </Form.Group>

   <Form.Group class="lable" controlId="formBasicconfpassword">
    <Form.Label> Password : </Form.Label>
    <Form.Control type="text" placeholder="Enter confirm Password" />
   </Form.Group>   

  <Form.Group class="lable" controlId="formBasicEmail">
    <Form.Label>Email address : </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   </Form.Group>

   <Form.Group class="lable" controlId="formBasicCheckBox">I accept the Term and Policy
   <a href='./style.css'> Click Here</a>
   </Form.Group>

  
    <div class='button1'>
  <Button  variant="primary" type="submit">
    Sign Up
  </Button>
  </div>
</Form>
    </div>
  )
}

export default SignUp