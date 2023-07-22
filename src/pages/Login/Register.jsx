import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";

  const {createUser,updateProfile} = useContext(AuthContext);
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
      const [accepted, setAccepted] = useState(false);
      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [photoUrl, setPhotoUrl] = useState("");
      const [password, setPassword] = useState("");

    const handleRegister = (e)=>{
         const form = e.target;
          e.preventDefault();
          if (password.length < 6) {
            setError(
              "password must be at least 6 digits!!!"
            );
            return;
          }
          createUser(email, password)
            .then((result) => {
              const createdUser = result.user;
              console.log(createdUser);
              form.reset();
              setError('');
              toast.success("User Registered Successfully!!!");
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.log(error);
              setError(error.message);
            });
    }

     const handleAccepted = (event) => {
       setAccepted(event.target.checked);
     };

    return (
      <Container className="w-50 mx-auto bg-white p-4">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Register your account
        </h3>
        <hr className="py-2 opacity-50" />
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="name"
              type="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPhotoUrl">
            <Form.Label className="fw-semibold">Photo URL</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="photo"
              type="text"
              placeholder="Enter photo url"
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-semibold">Email</Form.Label>
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
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              onClick={handleAccepted}
              name="accept"
              type="checkbox"
              label={
                <>
                  Accept <Link to="/terms">Term & Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <div className="d-grid pt-2">
            <Button disabled={!accepted} type="submit" variant="secondary">
              Register
            </Button>
          </div>
          <div className="text-center py-3">
            <Form.Text className="text-success">
              Already have an account?
              <Link className="text-danger ms-1" to="/login">
                Login
              </Link>
            </Form.Text>
          </div>
          <div className="text-center mt-2">
            <Form.Text className="text-success">{success}</Form.Text>
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    );
};

export default Register;