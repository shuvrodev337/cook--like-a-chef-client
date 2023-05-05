import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate()
  const { createUser } = useContext(AuthContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailPasswordRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photoURL.value
    if (password.length < 6) {
      setErrorMessage("password is too short, atleast 6 charecters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        event.target.reset();
        setSuccessMessage("User Registration successfull!");
        toast.success(`Registration success!!`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
        });
        setErrorMessage("");
        updateUserData(name, registeredUser, photo)
        navigate("/")
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error.message);
      });
  };


      // Update User Info
      const updateUserData = (name, user, photo) => {
         updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
        .then(() => {
          
        })
        .catch((error) => {
          setErrorMessage("Name and photo URL Update Error " + error.message);
        });
      };


  return (
    <div className="w-50 mx-auto mt-5 bg-light p-4 rounded shadow">
      <h2 className="text-center fw-bold fs-1 text-primary my-5">Register</h2>
      <form onSubmit={handleEmailPasswordRegister}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="text-primary">Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo-URL">
          <Form.Label className="text-primary">Photo URL </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Photo URL"
            name="photoURL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="text-primary">Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="text-primary">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </Form.Group>

        <p className="text-success">{successMessage}</p>
        <p className="text-danger">{errorMessage}</p>
        <div className="text-center my-3">
          <Button
            className="w-50 fw-semibold fs-4"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>

      <div className="my-4 text-center">
        <p className="text-success">
          Already have an account ?{" "}
          <Link className="text-decoration-none" to={"/login"}>
            <small>Login Here</small>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
