import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn, googleSignIn, githubSighnIn,passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef()

  const handleEmailPasswordLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        toast.success(`Login success!! Welcome ${loggedUser.displayName}.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
        });
        navigate(from);
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMessage("The email address you entered isn't connected to an account!");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorMessage("The password that you've entered is incorrect!");
        }
      });
  };
  //==========//
  const handleResetPassword = (event) => {
    const email = emailRef.current.value
    if (!email) {
      toast.error("Please provide E-mail")
      return
    }
    passwordReset(email)
    .then((result) => {
      
      toast.success("Password reset email sent. Please Check your inbox/spam.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  };
  //===========//
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        toast.success(`Login success!! Welcome ${googleLoggedUser.displayName}.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
        });
        navigate(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSighnIn()
      .then((result) => {
        const githubLoggedUser = result.user;
        toast.success(`Login success!! Welcome ${githubLoggedUser.displayName}.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
        });
        navigate(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="w-50 mx-auto mt-5 bg-light p-4 rounded shadow">
      <h2 className="text-center fw-bold fs-1 text-primary my-5">Login</h2>
      <form onSubmit={handleEmailPasswordLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="text-primary">Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            ref={emailRef}
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

        <p className="text-danger">{errorMessage}</p>
        <div className="text-center my-3">
          <Button
            className="w-50 fw-semibold fs-4"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>

      <div className="d-flex justify-content-center gap-3">
        <div className="mt-2">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline-danger"
            type="submit"
          >
            Sign In with Google
          </Button>
        </div>
        <div className="mt-2">
          <Button
            onClick={handleGithubSignIn}
            variant="outline-secondary"
            type="submit"
          >
            Sign In with Github
          </Button>
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-success">
          New to CookLike-a-Chef ?{" "}
          <Link className="text-decoration-none" to={"/register"}>
            <small>Sign up or Register</small>
          </Link>
        </p>
        <p>
          <small>Forgot password? </small>
          <button
            onClick={handleResetPassword}
            className="btn btn-link text-decoration-none"
          >
            Reset password
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
