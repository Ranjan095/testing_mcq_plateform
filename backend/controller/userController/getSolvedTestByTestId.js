const SolvedTest = require("../../model/test/solvedTest");

const getSolvedTestByTestId = async (req, res) => {
  try {
    const { solvedTestId } = req?.params;

    if (!solvedTestId) {
      return res.status(404).send({ error: "solvedTestId is required!" });
    }

    const solvedTests = await SolvedTest.findById(solvedTestId).populate(
      "testId"
    );

    return res.status(200).send(solvedTests);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};

module.exports = { getSolvedTestByTestId };
