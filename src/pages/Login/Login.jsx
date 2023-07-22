import React,{useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogIn=()=>{

    }
    return (
      <Container className="w-50 mx-auto bg-white p-4 my-5">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Login to your account
        </h3>
        <hr className="" />
        <Form className='py-4' onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <div className="d-grid pt-2">
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </div>
          <br></br>
          <Form.Text>
            <div className="text-center">
              Don't have an account?{" "}
              <Link className="text-danger" to="/register">
                Register
              </Link>
            </div>
          </Form.Text>
          <div className="text-center mt-2">
            <Form.Text className="text-success">{success}</Form.Text>
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    );
};

export default Login;