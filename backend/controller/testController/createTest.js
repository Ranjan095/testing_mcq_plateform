const Test = require("../../model/test/testModel");
const Users = require("../../model/userModel");

const createTest = async (req, res, next) => {
  try {
    if (!req?.user?.isAdmin) {
      return res
        .status(403)
        .send({ message: "Access denied, Please contact with Admin!" });
    }

    const { testName, questions, assignedUserIds } = req.body; // Accept list of user IDs

    // Verify that all provided user IDs exist in the database
    const assignedUsers = await Users.find({ _id: { $in: assignedUserIds } });
    if (assignedUsers.length !== assignedUserIds.length) {
      return res.status(400).json({ msg: "One or more users not found" });
    }

    // Create the test
    const test = new Test({
      testName,
      questions,
      createdBy: req?.user?._id,
      assignedTo: assignedUserIds, // Assign the test to the list of users
    });

    await test.save();
    res
      .status(201)
      .json({ message: "Test has been created successfully", test });
  } catch (error) {
    return res.status(400).send({ error: error?.message });
  }
};

module.exports = { createTest };
