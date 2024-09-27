const SolvedTest = require("../../model/test/solvedTest");
const Test = require("../../model/test/testModel");

const userTestSubmit = async (req, res) => {
  const { testId, answers } = req.body; // `answers` will be an array of {questionId, selectedAnswer}

  try {
    // Fetch the test to check against correct answers
    const test = await Test.findById(testId);

    if (!test) {
      return res.status(404).json({ msg: "Test not found" });
    }

    let score = 0;
    const solvedQuestions = [];

    // Compare each user's answer with the correct answer
    test.questions.forEach((question) => {
      const userAnswer = answers.find(
        (ans) => ans.questionId === question._id.toString()
      );

      if (userAnswer) {
        const isCorrect = userAnswer.selectedAnswer === question.correctAnswer;
        if (isCorrect) score++;

        solvedQuestions.push({
          questionId: question._id,
          selectedAnswer: userAnswer.selectedAnswer,
          isCorrect,
        });
      }
    });

    // Save the solved test record
    const solvedTest = new SolvedTest({
      testId,
      userId: req.user._id,
      solvedQuestions,
      score,
    });

    await solvedTest.save();

    return res
      .status(201)
      .send({ solvedTest, msg: "Test submitted successfully", score });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};

module.exports = { userTestSubmit };
