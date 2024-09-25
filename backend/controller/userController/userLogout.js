const errorHandler = require("../../utils/errorHandling/errorHandler");

const userLogout = async (req, res) => {
  try {
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("isAdmin", options)
      .send({ message: "User logged out successfully!" });
  } catch (error) {
    return errorHandler(res, 404, error.message);
  }
};

module.exports = userLogout;
