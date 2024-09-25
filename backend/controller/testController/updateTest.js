const Test = require("../../model/test/testModel");

const updateTest = async (req, res) => {
  try {
    if (!req?.user?.isAdmin) {
      return res
        .status(403)
        .send({ message: "Access denied, Please contact with Admin!" });
    }

    const { testId } = req.query;
    if (!testId) {
      return res.status(404).send({ error: "please provide test-id" });
    }

    const test = await Test.findById(testId);

    if (!test) {
      return res.status(404).send({ error: "Invalid test-id" });
    }

    const data = req.body; // Accept list of user IDs

    let updatedTest = await Test.findByIdAndUpdate(testId, data, { new: true });

    if (!updatedTest) {
      return res
        .status(404)
        .send({ error: "Somthing went wrong while updating test" });
    }

    return res
      .status(200)
      .send({ message: "your test has been updated", data: updatedTest });
  } catch (error) {
    return res.status(401).send({ error: error?.message });
  }
};

module.exports = { updateTest };
