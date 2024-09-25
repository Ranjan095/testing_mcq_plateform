const Test = require("../../model/test/testModel");

const getAllTest = async (req, res) => {
  try {

    if (!req?.user?.isAdmin) {
        return res
          .status(403)
          .send({ message: "Access denied, Please contact with Admin!" });
      }

    const allTest = await Test.find();
    return res.status(200).send({ tests: allTest });
  } catch (error) {
    return res.status(401).send({ error: error?.message });
  }
};

module.exports = { getAllTest };
