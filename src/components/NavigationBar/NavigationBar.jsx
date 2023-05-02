import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    // <div>
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/login"}>Login</Link>
    //     <Link to={"/register"}>Register</Link>
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="white">
      <Container>
        <Link className="fs-3 fw-bolder text-decoration-none"><span className="text-white">Cook</span><span className="text-danger">Like-a-</span><span className="text-white">Chef</span></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-3">
            
            <Link className="text-white me-2  fs-5 fw-semibold  text-decoration-none" to={"/"}>Home</Link>
            <Link className="text-white  fs-5 fw-semibold  text-decoration-none" to={"/blog"}>Blog</Link>

            
          </Nav>
          <Nav>
          
            <Link to={"/login"}><Button className="text-white fw-semibold" variant="danger">Login</Button>{' '}</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
