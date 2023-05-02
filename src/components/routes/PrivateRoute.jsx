import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
  const location = useLocation();


    if (loading) {
        // return <progress className="progress progress-accent w-56" value="100" max="100"></progress>
        return <div>loading.......</div>

    }
   if (user) {
    return children
   }
   return <Navigate to={"/login"} replace={true} state={{from:location}}></Navigate>
};

export default PrivateRoute;