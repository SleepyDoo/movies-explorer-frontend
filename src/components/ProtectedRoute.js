import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    <Route>
      {props.isLoggedIn ? props.children  : <Navigate to="/" />}
    </Route>
  );
}

export default ProtectedRoute;