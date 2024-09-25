import React from "react";

import SubjectCard from "../../components/SubjectCard";
import image from "../../assets/image1.png";

const UserDashboard = () => {
  const subjects = [
    { id: 1, name: "Mathematics", image: image },
    { id: 2, name: "Science", image: image },
    { id: 3, name: "History", image: image },
    { id: 4, name: "English", image: image },
    { id: 5, name: "Art", image: image },
    { id: 6, name: "Geography", image: image },
    { id: 7, name: "Physics", image: image },
    { id: 8, name: "Chemistry", image: image },
    { id: 9, name: "Biology", image: image },
    { id: 10, name: "Computer Science", image: image },
  ];
  return (
    <>
      <h1 className="text-primary text-5xl font-medium text-center uppercase py-5 underline ">
        User test Assign
      </h1>

      <div className="p-4">
        <div className="w-full  mx-auto md:w-[90%] lg:w-[85%] grid lg:grid-cols-8 gap-4">
          {/* user information */}
          <div className=" col-span-4 lg:col-span-2   ">
            <div className="myShadow flex flex-col gap-3 p-4 ">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                <div key={i}>
                  <div className="p-2 bg-secondary rounded-lg font-medium hover:bg-gray-300 cursor-pointer">
                    <span>Name:</span>
                    <span className="ml-2 text-primary">Mukesh</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* user test card */}
          <div className=" col-span-4  lg:col-span-6">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subjects.map((data) => (
                <SubjectCard key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
