import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { toastError } from "../../react-toastify/ReactToastify";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const accessToken = Cookies.get("accessToken");

  if (!accessToken) {
    toastError("Oops Please login!!");
  }

  return !accessToken ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
