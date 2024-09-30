const errorHandler = require("../../utils/errorHandling/errorHandler");

const userLogout = async (req, res) => {
  try {
    return res.status(200).send({ message: "User logged out successfully!" });
  } catch (error) {
    return errorHandler(res, 404, error.message);
  }
};

module.exports = userLogout;
