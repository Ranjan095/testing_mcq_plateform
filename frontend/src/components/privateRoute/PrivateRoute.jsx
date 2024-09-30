import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { toastError } from "../../react-toastify/ReactToastify";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  // const accessToken = Cookies.get("accessToken");
  const { accessToken } = useSelector((store) => store?.authReducer);

  if (!accessToken) {
    toastError("Oops Please login!!");
    // alert("Please login")
  }

  return !accessToken ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
