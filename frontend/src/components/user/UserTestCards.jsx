import React from "react";

const UserTestCards = ({ options, questionText, no }) => {
  return (
    <div className="bg-gray-100 m-2 rounded-md p-2">
      {/* Display the question number and question text */}
      <h1 className="font-semibold">{`Q  ${no} - ${questionText}`}</h1>

      <div className="bg-gray-200 p-2 m-2 rounded-md">
        {options?.map((ele, i) => {
          return (
            <div key={i} className="flex justify-start mb-4 items-center">
              {/* Use radio input and give all options for a single question the same 'name' attribute */}
              <input
                type="radio"
                name={`question-${no}`} // Ensure only one option can be selected per question
                className="w-4 h-4 text-tab bg-gray-100 border-gray-300 focus:ring-tab"
              />
              {/* Display the label for each option */}
              <label className="ms-2 text-md font-medium text-gray-900">
                {ele}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTestCards;
