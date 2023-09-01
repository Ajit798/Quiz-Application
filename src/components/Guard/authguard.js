import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem("userStatus");

  return token === "loggedIn" ? children : <Navigate to="/" />;
};

export default AuthGuard;
