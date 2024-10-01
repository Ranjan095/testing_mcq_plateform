import React, { useState } from "react";

const questionObj = { questionText: "", options: [], correctAnswer: "" };

const obj = {
  testName: "",
  isCommon: true,
  questions: [questionObj],
  assignedUserIds: [],
};

const CreateTest = () => {
  const [test, setTest] = useState(obj);
  const [newOption, setNewOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit test", test);
  };

  const handleAddQuestion = () => {
    setTest({ ...test, questions: [...test.questions, questionObj] });
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...test.questions];
    updatedQuestions.splice(index, 1);
    setTest({ ...test, questions: updatedQuestions });
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...test.questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [name]: value };
    setTest({ ...test, questions: updatedQuestions });
  };

  const handleComanTest = (e) => {
    setTest({ ...test, isCommon: e.target.value });
  };

  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleAddOption = (qIndex) => {
    if (newOption.length < 1) return;
    const updatedQuestions = [...test.questions];
    const currentOptions = updatedQuestions[qIndex].options || [];
    updatedQuestions[qIndex].options = [...currentOptions, newOption];
    setTest({ ...test, questions: updatedQuestions });
    setNewOption("");
  };

  const handleDeleteOption = (qIndex, optIndex) => {
    const updatedQuestions = [...test.questions];
    updatedQuestions[qIndex].options.splice(optIndex, 1);
    setTest({ ...test, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (qIndex, e) => {
    const updatedQuestions = [...test.questions];
    updatedQuestions[qIndex].correctAnswer = e.target.value;
    setTest({ ...test, questions: updatedQuestions });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Create Test</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label className="block font-bold mb-2">Test Name</label>
          <input
            required
            placeholder="Enter Test Name"
            value={test.testName}
            onChange={(e) => setTest({ ...test, testName: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block font-bold mb-2">Is Common Test</label>
          <select
            required
            onChange={handleComanTest}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select test type</option>
            <option value={true}>YES</option>
            <option value={false}>NO</option>
          </select>
        </div>

        <div>
          {test?.questions?.map((ele, qi) => (
            <div className="bg-gray-100 p-4 rounded-lg mb-6" key={qi}>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Q - {qi + 1}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(qi)}
                  className="text-red-600 font-bold p-2 rounded-md"
                >
                  Delete
                </button>
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2">Question Title</label>
                <input
                  required
                  placeholder="Enter Question Title"
                  value={ele.questionText}
                  name="questionText"
                  onChange={(e) => handleQuestionChange(qi, e)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2">Options</label>
                <div className="flex flex-wrap gap-2">
                  {ele.options?.map((opt, oi) => (
                    <div
                      className="bg-gray-200 flex items-center p-2 rounded-md"
                      key={oi}
                    >
                      <span>{opt}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteOption(qi, oi)}
                        className="ml-2 text-red-500 hover:bg-red-200 rounded-md px-2 py-1"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input
                  value={newOption}
                  onChange={handleOptionChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Add new option"
                />
                <button
                  type="button"
                  onClick={() => handleAddOption(qi)}
                  className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add
                </button>
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2">Correct Option</label>
                <select
                  required
                  value={ele.correctAnswer}
                  onChange={(e) => handleCorrectAnswerChange(qi, e)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Correct Answer</option>
                  {ele.options?.map((opt, oi) => (
                    <option key={oi} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
          >
            Add Question +
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit Test
        </button>
      </form>
    </div>
  );
};

export default CreateTest;
