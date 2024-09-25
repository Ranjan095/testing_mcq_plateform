import React from "react";

const SubjectCard = ({ data }) => {
  return (
    <div className="myShadow overflow-hidden cursor-pointer group bg-secondary">
      <div className="h-[200px] w-full relative overflow-hidden">
        <img
          src={data.image}
          alt="Description of image"
          className="imageHandel h-full w-full object-cover group-hover:scale-110  transition-all duration-300 ease-in-out"
        />
        <div className="absolute top-0 left-0 bg-overlayColor h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-heading">{data.name}</h3>
      </div>
    </div>
  );
};

export default SubjectCard;
