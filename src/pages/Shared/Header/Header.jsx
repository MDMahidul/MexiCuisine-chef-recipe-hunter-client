import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const user = null;
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary shadow-sm"
      >
        <Container>
          <Navbar.Brand className="fw-bolder fs-3">
            <Link className='text-decoration-none' to='/'>
              <span className="text-warning">Mexi</span>
              <span className="logo-last-name">Cuisine</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link>
                <ActiveLink to="/">Home</ActiveLink>
              </Nav.Link>
              <Nav.Link>
                <ActiveLink to="/about">About</ActiveLink>
              </Nav.Link>
              <Nav.Link>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </Nav.Link>
            </Nav>
            {!user ? (
              <Nav>
                <Link to="/login">
                  <Button variant="success" className="me-2">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="success">Register</Button>
                </Link>
              </Nav>
            ) : (
              <Nav>
                <Link to="/login">
                  <img
                    className="user-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    alt=""
                  />
                </Link>
                <Link to="/register">
                  <Button variant="success">Log Out</Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;