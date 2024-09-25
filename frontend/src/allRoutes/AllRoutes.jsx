import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import HomePage from "../components/HomePage";
import SignUp from "../components/SignUp";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import UpdateUser from "../components/UpdateUser";
import AdminDashboard from "../components/admin/adminDashboard";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
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
