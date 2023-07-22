import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-body-tertiary shadow-lg">
      <Container>
        <div className="row py-5">
          <div className="col-md-3">
            <h4>
              <span className="text-warning">Mexi</span>
              <span className="logo-last-name">Cuisine</span>
            </h4>
            <p className="footer-des">
              MexiCuisine is a delightful online destination for authentic
              Mexican food recipes. Discover the magic of traditional dishes,
              tantalizing flavors, and easy-to-follow cooking guides to savor
              the taste of Mexico at home.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us On</h5>
            <div className="d-flex flex-column fw-bold social-links  mt-3">
              <p>
                <a href="#">
                  <FaFacebook />
                </a>{" "}
                Facebook
              </p>
              <p>
                <a href="#">
                  <FaInstagram />
                </a>{" "}
                Instagram
              </p>
              <p>
                <a href="#">
                  <FaLinkedinIn />
                </a>{" "}
                Linkedin
              </p>
              <p>
                <a href="#">
                  <FaYoutube />
                </a>{" "}
                Youtube
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Important Links</h5>
            <ul className="d-flex flex-column  gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Submit Your Comments</h5>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="Write your comments"
              ></textarea>
            </div>
            <Button>Submit</Button>
          </div>
        </div>
        <div className="text-center py-3">
          <p>@2023 MexiCuisine. All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
