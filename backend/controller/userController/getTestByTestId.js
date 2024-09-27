const Test = require("../../model/test/testModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

const getTestByTestId = async (req, res) => {
  try {
    const { testId } = req?.params;

    const test = await Test.findById(testId).select("-questions.correctAnswer");
    if (!test) {
      return errorHandler(res, 401, "Invalid test ID");
    }

    /** FOR ONLY ASSIGN USER */
    // if (!test.assignedTo.includes(req.user._id)) {
    //   return errorHandler(res, 401, "access denied");
    // }

    return res.status(200).send(test);
  } catch (error) {
    return errorHandler(res, 401, error?.message);
  }
};

module.exports = { getTestByTestId };
