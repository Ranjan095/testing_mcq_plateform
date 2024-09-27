import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import devRanjan from "../assets/devRanjan.png";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authAction";

const Navbar = () => {
  const accessToken = Cookies.get("accessToken");
  const isAdmin = Cookies.get("isAdmin");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(typeof isAdmin);

  const { fullName } = useSelector((store) => store?.authReducer);

  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "User Dashboard & MCQ", path: "/user-dashboard" },
    isAdmin === "true" && {
      id: 3,
      name: "Admin dashboard",
      path: "/admin/dashboard",
    },
    { id: 4, name: "Test Result", path: "/test-result" },
  ];

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={devRanjan} className="h-8" alt="Dev-Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MCQ-platform
            </span>
          </Link>
          {accessToken ? (
            <div className="space-x-1">
              <span className="font-serif text-tab">{fullName}</span>{" "}
              <button
                onClick={handleLogout}
                className="text-lg px-2 py-1 text-white border hover:border-error hover:text-error rounded-md"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <NavLink
                to="/signUp"
                className="text-lg px-2 py-1 text-white border hover:border-active rounded-md"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="text-lg px-2 py-1 text-white border hover:border-active rounded-md"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {navItem?.map((ele, i) => (
                <li key={i}>
                  <NavLink
                    to={ele?.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-tab "
                        : `text-white text-md hover:underline `
                    }
                  >
                    {ele?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
