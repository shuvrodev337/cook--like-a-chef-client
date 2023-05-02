import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailPasswordLogin = (event) => {};
  const handleResetPassword = (event) => {};
  return (
    <div className="w-50 mx-auto mt-5 bg-light p-4 rounded shadow">
      <h2 className="text-center fw-bold fs-1 text-primary my-5">
        Login
      </h2>
      <form onSubmit={handleEmailPasswordLogin}>
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
          <p>
          <small>
            Forgot password?{" "}
          </small>
            <button onClick={handleResetPassword} className="btn btn-link text-decoration-none">
              Reset password
            </button>
        </p>
        <p className="text-success">{successMessage}</p>
        <p className="text-danger">{errorMessage}</p>
        <div className="text-center my-3">
          <Button className="w-50 fw-semibold fs-4" variant="primary" type="submit">
            Login
          </Button>
        </div>
      </form>

      <div className="d-flex justify-content-center gap-3">
        <div className="mt-2">
          <Button variant="outline-danger" type="submit">
            Sign In with Google
          </Button>
          
        </div>
        <div className="mt-2">
          <Button variant="outline-secondary" type="submit">
            Sign In with Github
          </Button>
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-success">
          New to CookLike-a-Chef ?{" "}
          <Link className="text-decoration-none" to={"/register"}>
            <small >Sign up/Register</small>
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default Login;
