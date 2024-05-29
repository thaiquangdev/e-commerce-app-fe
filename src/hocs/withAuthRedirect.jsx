import React from "react";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (WrapperComponent) => {
  return (props) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Navigate to="/" />;
    }
    return <WrapperComponent {...props} />;
  };
};

export default withAuthRedirect;
