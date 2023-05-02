import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    alert("Log Out successfull")
    // toast here
  }
  return (
   
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
          {
            user ?
            <Link ><Button onClick={handleLogOut} className="text-white fw-semibold" variant="warning">Log Out</Button>{' '}</Link> :
            <Link to={"/login"}><Button className="text-white fw-semibold" variant="danger">Login</Button>{' '}</Link>
          }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
