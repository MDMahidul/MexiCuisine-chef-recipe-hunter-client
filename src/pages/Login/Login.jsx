import React,{useContext, useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signIn, handleGoogleSignIn, handleGithubSignIn } =
      useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const handleLogIn=(e)=>{
      e.preventDefault();
      console.log(email, password);
      signIn(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          toast("Logged in successfully!!!");
          e.form.reset();
       navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }

    return (
      <Container className="w-50 mx-auto bg-white p-4 my-5">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Login to your account
        </h3>
        <hr className="" />
        <Form className="py-4" onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
        <div className=" d-flex justify-content-between align-content-center social-button-container flex-column mt-2">
          <Button onClick={handleGoogleSignIn} className="bg-white border-0">
            <img
              className=" social-button"
              src="https://i.ibb.co/gSTHXZJ/google-btn.png"
              alt=""
            />
          </Button>
          <Button onClick={handleGithubSignIn} className="bg-white border-0">
            <img
              className=" social-button"
              src="https://i.ibb.co/g9f4P0S/github-btn.png"
              alt=""
            />
          </Button>
        </div>
      </Container>
    );
};

export default Login;