const Users = require("../../model/userModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

let getAllUsers = async (req, res) => {
  try {
    let users = await Users.find();
    return res.status(201).send(users);
  } catch (error) {
    return errorHandler(res, 404, error.message);
  }
};
module.exports = getAllUsers;
