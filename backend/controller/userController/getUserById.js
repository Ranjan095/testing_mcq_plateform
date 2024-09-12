const Users = require("../../model/userModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

let getUserById = async (req, res) => {
  try {
    let { id } = req.query;
    let user = await Users.findOne({ _id: id });
    return res.status(201).send(user);
  } catch (error) {
    return errorHandler(res, 404, error.message);
  }
};
module.exports = getUserById;
