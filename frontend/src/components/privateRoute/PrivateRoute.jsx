import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      alert("Please Login!");
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return accessToken ? children : null;
};

export default PrivateRoute;
