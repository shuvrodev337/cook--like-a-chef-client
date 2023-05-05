import React, { useContext } from "react";
import { Button, Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { Tooltip } from 'react-tooltip'
import { toast } from "react-toastify";
const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    toast.success("Logout Successfull!!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
    });
  }
  return (
   
    <Navbar className="container mb-2 rounded" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="fs-3 fw-bolder text-decoration-none"><span className="text-white">Cook</span><span className="text-danger">Like-a-</span><span className="text-white">Chef</span></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-3">

            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "btn btn-primary me-2" : "btn btn-light me-2")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "btn btn-primary me-2" : "btn btn-light me-2")}
            >
              Blog
            </NavLink>
            
          </Nav>
          <Nav>
          {
            user ?
            <>
            <Tooltip className="bg-danger" id="my-tooltip" />
            <Image data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="me-3" src={user?.photoURL} style={{width:"36px",height:"36px"}} roundedCircle />
            <Button onClick={handleLogOut} className="text-white fw-semibold" variant="warning">Log Out</Button>{' '}
            </> :
            // <Link to={"/login"}><Button className="text-white fw-semibold" variant="danger">Login</Button>{' '}</Link>
            <NavLink
              to="/login"
              aria-label="Login"
              title="Login"
              className={({ isActive }) => (isActive ? "btn btn-primary me-2" : "btn btn-light me-2")}
            >
              Login
            </NavLink>
          }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
