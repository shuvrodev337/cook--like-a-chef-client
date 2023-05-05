import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="primary">
          
        </Spinner>
      </div>
    );
    
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
