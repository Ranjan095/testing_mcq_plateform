const Test = require("../../model/test/testModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

const getTestByUserId = async (req, res) => {
  try {
    const userId = req?.user?._id;

    const allTest = await Test.find().select(
      "-assignedTo -questions.correctAnswer"
    );

     /** FOR ONLY ASSIGN USER */
    // const allTest = await Test.find({ assignedTo: { $in: userId } }).select(
    //   "-assignedTo -questions.correctAnswer"
    // );

    // console.log(allTest);

    return res.status(200).send(allTest);
  } catch (error) {
    return errorHandler(res, 401, error?.message);
  }
};

module.exports = { getTestByUserId };
