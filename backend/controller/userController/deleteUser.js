const Users = require("../../model/userModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

const deleteUserById = async (req, res) => {
  try {
    let { id } = req.query;
    let deletedUser = await Users.findByIdAndDelete(id);
    if (!deletedUser) {
      return errorHandler(res, 404, "User not found");
    }
    // console.log(deletedUser);
    return res.status(201).send({ message: "User deleted" });
  } catch (error) {
    return errorHandler(res, 401, error.message);
  }
};
module.exports = deleteUserById;
