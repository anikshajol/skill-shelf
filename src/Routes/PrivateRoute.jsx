import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Loader from "../Components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Navigate state={location.pathname} to={"/login"} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
