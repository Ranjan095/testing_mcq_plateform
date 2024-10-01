const Test = require("../../model/test/testModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

const getTestByUserId = async (req, res) => {
  try {
    const userId = req?.user?._id;

    // Aggregation to fetch common tests and assigned tests separately
    const allTests = await Test.aggregate([
      {
        $facet: {
          // Fetch common tests
          commonTest: [
            {
              $match: {
                isCommon: true, // Only common tests
              },
            },
            {
              $project: {
                assignedTo: 0, // Exclude the 'assignedTo' field
                "questions.correctAnswer": 0, // Exclude correct answers from questions
              },
            },
          ],
          // Fetch assigned tests for the specific user
          assignedTest: [
            {
              $match: {
                isCommon: false, // Ensure it's not a common test
                assignedTo: { $in: [userId] }, // Assigned specifically to this user
              },
            },
            {
              $project: {
                assignedTo: 0, // Exclude the 'assignedTo' field
                "questions.correctAnswer": 0, // Exclude correct answers from questions
              },
            },
          ],
        },
      },
    ]);

    // Send the separated tests back in the response
    return res.status(200).send(allTests[0]); // allTests[0] because facet returns an array
  } catch (error) {
    return errorHandler(res, 401, error?.message);
  }
};

module.exports = { getTestByUserId };
