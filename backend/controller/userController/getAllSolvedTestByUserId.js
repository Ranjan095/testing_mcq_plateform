const SolvedTest = require("../../model/test/solvedTest");

const getAllSolvedTestByUserId = async (req, res) => {
  try {
    const solvedTests = await SolvedTest.find({
      userId: req.user._id,
    }).populate("testId");

    return res.status(200).send(solvedTests);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};

module.exports = { getAllSolvedTestByUserId };
