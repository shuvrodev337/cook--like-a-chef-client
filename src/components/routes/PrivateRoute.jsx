import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // return <progress  className='mx-auto' className="progress progress-accent w-56" value="100" max="100"></progress>
    return <Spinner className="text-center" animation="border" size="lg" variant="danger" />
    
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ from: location }}
    ></Navigate>
  );
};

export default PrivateRoute;
