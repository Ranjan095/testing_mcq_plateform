import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import devRanjan from "../assets/devRanjan.png";
import Cookies from "js-cookie";

const Navbar = () => {
  const { pathname } = useLocation();
  const accessToken = Cookies.get("accessToken");
  const isAdmin = Cookies.get("isAdmin");
  console.log(typeof isAdmin);
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
            <button className="text-lg px-2 py-1 text-white border hover:border-red-600 rounded-md">
              Log out
            </button>
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
              <li>
                <Link
                  to="/"
                  className={`text-white text-md hover:underline ${
                    pathname == "/" && "text-active font-semibold underline"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/user-dashboard"
                  className={`text-white text-md hover:underline ${
                    pathname == "/user-dashboard" &&
                    "text-active font-semibold underline"
                  }`}
                >
                  User Dashboard
                </Link>
              </li>
              {isAdmin === "true" && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    className={`text-white text-md hover:underline ${
                      pathname == "/admin-dashboard" &&
                      "text-active font-semibold underline"
                    }`}
                  >
                    Admin dashboard
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to="/result-page"
                  className={`text-white text-md hover:underline ${
                    pathname == "/result-page" &&
                    "text-active font-semibold underline"
                  }`}
                >
                  Result Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
