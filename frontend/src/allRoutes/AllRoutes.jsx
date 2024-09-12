import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import HomePage from "../components/HomePage";
import SignUp from "../components/SignUp";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import UpdateUser from "../components/UpdateUser";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/updateUser/:id"
          element={
            <PrivateRoute>
              <UpdateUser />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
