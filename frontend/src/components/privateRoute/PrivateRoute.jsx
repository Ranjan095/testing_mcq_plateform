import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const accessToken = Cookies.get("accessToken");

  if (!accessToken) {
    alert("Please Login!");
  }

  return !accessToken ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
