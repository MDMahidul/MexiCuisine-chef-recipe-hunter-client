import React from 'react';
import { Button, Container,Form } from 'react-bootstrap';

const Contact = () => {
    return (
      <Container className='mb-5 pb-5'>
        <h1 className="section-header text-center mt-5 pb-5">Contact Us</h1>
        <Form className='w-75 mx-auto shadow p-5'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='fw-bold gray'>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='fw-bold gray'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='fw-bold gray'>Message</Form.Label>
            <Form.Control as="textarea" rows={3}  placeholder='Write your message'/>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
};

export default Contact;