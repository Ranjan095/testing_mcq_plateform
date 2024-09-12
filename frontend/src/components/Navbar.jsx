import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-red-200 py-4">
      <Link to={"/"}>
        <ul className="font-semibold">Home</ul>
      </Link>
      <Link to={"/login"}>
        {" "}
        <ul className="font-semibold">Login</ul>
      </Link>
      <Link to={"/signUp"}>
        {" "}
        <ul className="font-semibold">Sign-Up</ul>
      </Link>
    </div>
  );
};

export default Navbar;
