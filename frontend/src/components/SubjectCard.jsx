import React from "react";
import image from "../assets/image1.png";
import { Link } from "react-router-dom";
const SubjectCard = ({ testName, _id }) => {
  return (
    <Link to={`/user-dashboard/${_id}`}>
      <div className="w-[200px] h-[200px] bg-green-300 mx-2">
        <h1>{testName}</h1>
      </div>
      {/* <div className="myShadow overflow-hidden cursor-pointer group bg-secondary">
        <div className="h-[200px] w-full relative overflow-hidden">
          <img
            src={image}
            alt="Description of image"
            className="imageHandel h-full w-full object-cover group-hover:scale-110  transition-all duration-300 ease-in-out"
          />
          <div className="absolute top-0 left-0 bg-overlayColor h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg text-heading">{testName}</h3>
        </div>
      </div> */}
    </Link>
  );
};

export default SubjectCard;
