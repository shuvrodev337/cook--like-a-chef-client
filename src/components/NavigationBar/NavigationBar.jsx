import React, { useContext } from "react";
import { Button, Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { Tooltip } from 'react-tooltip'
const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext)
  // console.log(user.photoURL);
  const handleLogOut = () =>{
    logOut()
    alert("Log Out successfull")
    // toast here
  }
  return (
   
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <>
            <Tooltip className="bg-danger" id="my-tooltip" />
            <Image data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="me-3" src={user?.photoURL} style={{width:"36px",height:"36px"}} roundedCircle />
            <Button onClick={handleLogOut} className="text-white fw-semibold" variant="warning">Log Out</Button>{' '}
            </> :
            <Link to={"/login"}><Button className="text-white fw-semibold" variant="danger">Login</Button>{' '}</Link>
          }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
