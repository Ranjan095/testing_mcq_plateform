const Test = require("../../model/test/testModel");

const deleteTest = async (req, res) => {
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

    let deletedTest = await Test.findByIdAndDelete(testId, { new: true });

    if (!deletedTest) {
      return res
        .status(404)
        .send({ error: "Somthing went wrong while delete test" });
    }

    return res.status(200).send({ message: "your test has been deleted" });
  } catch (error) {
    return res.status(401).send({ error: error?.message });
  }
};

module.exports = { deleteTest };
