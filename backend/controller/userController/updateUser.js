const Users = require("../../model/userModel");
const errorHandler = require("../../utils/errorHandling/errorHandler");

const updateUserById = async (req, res) => {
  try {
    let { id } = req.query;
    let data = req.body;
    let updatedData = await Users.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    }).select("-password");
    if (!updatedData) {
        return errorHandler(res, 404, "User not found");
      }
    // console.log(updatedData);
    return res.status(201).send({ message: "User has been updated" });
  } catch (error) {
    return errorHandler(res, 401, error.message);
  }
};
module.exports = updateUserById;
