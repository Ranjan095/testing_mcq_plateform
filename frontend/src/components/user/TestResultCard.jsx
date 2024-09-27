import React from "react";

const TestResultCard = ({
  dateSolved,
  score,
  solvedQuestions,
  testId,
  userId,
}) => {
  const { questions, testName } = testId;

  return (
    <div>
      <h1 className="text-2xl font-bold">{testName}</h1>
      <h1>
        <b>Date solved:</b> {new Date(dateSolved).toLocaleString()}
      </h1>
      <h1>
        <b>Scored:</b> {`${score} / ${questions.length}`}
      </h1>

      {questions?.map((quest, qi) => {
        const solvedQuestion = solvedQuestions.find(
          (sq) => sq.questionId === quest._id
        );

        return (
          <div key={quest._id} className="m-2 p-2 bg-gray-100 rounded-md">
            <h1 className="font-bold">{`Q ${qi + 1} - ${
              quest?.questionText
            }`}</h1>

            <div>
              {quest?.options.map((opt, i) => {
                const isCorrect = quest?.correctAnswer === opt;
                const isSelected = solvedQuestion?.selectedAnswer === opt;

                return (
                  <div
                    key={i}
                    className={`flex items-center mb-2 p-2 rounded-md ${
                      isCorrect
                        ? "bg-green-500 text-white" // Green for correct answer
                        : isSelected && !isCorrect
                        ? "bg-red-500 text-white" // Red for incorrect selected answer
                        : "bg-gray-200" // Default for unselected options
                    }`}
                  >
                    <input
                      disabled
                      readOnly
                      type="radio"
                      checked={isSelected} // Check the user's selected answer
                      className="w-4 h-4 border-gray-300 focus:ring-tab"
                    />
                    <label className="ml-2 text-md font-medium">{opt}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestResultCard;
