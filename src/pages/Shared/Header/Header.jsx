import React, { useContext } from 'react';
import { Container, Nav, Navbar,Button,OverlayTrigger, Tooltip } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    
    const handleLogOut = () => {
      logOut()
        .then()
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-secondary-subtle shadow-sm pb-3"
      >
        <Container>
          <Navbar.Brand className="fw-bolder fs-3">
            <Link className="text-decoration-none" to="/">
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
                  <Button variant="success" className="me-3 mt-2">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="mt-2" variant="success">
                    Register
                  </Button>
                </Link>
              </Nav>
            ) : (
              <Nav>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        {user.displayName ? user.displayName : "user"}
                      </Tooltip>
                    }
                  >
                    <img
                      className="user-image"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                      }
                      alt=""
                    />
                  </OverlayTrigger>
                </div>
                <Link to="/">
                  <Button onClick={handleLogOut} variant="success">
                    Log Out
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;