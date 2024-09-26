import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

import HomePage from "../components/HomePage";
import SignUp from "../components/SignUp";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import UpdateUser from "../components/UpdateUser";
import AdminDashboard from "../components/admin/adminDashboard";
import UserDashboard from "../components/user/userDashboard";
import UserTestPage from "../components/user/UserTestPage";

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
          path="/user-dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/:testId"
          element={
            <PrivateRoute>
              <UserTestPage />
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
