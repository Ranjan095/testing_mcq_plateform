import React from "react";

const UserTestCards = ({ options, questionText,no }) => {
  return (
    <div>
      <h1>  {`Q  ${no} - ${questionText}`}</h1>
      {options?.map((ele, i) => {
        return (
          <div key={i} className="flex items-center justify-center mb-4">
            <input
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label className="ms-2 text-md font-medium text-gray-900 ">
              {ele}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default UserTestCards;
