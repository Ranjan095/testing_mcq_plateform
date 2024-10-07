import React from "react";
import image from "../assets/image1.png";
import { Link } from "react-router-dom";
const SubjectCard = ({ testName, _id }) => {
  return (
    <div className="my-2">
      <Link to={`/user-dashboard/${_id}`}>
        <div className=" flex justify-center rounded-md items-center font-bold md:w-[200px] h-[100px] bg-primary text-white mx-2">
          <h1>{testName}</h1>
        </div>
      </Link>
    </div>
  );
};

export default SubjectCard;
