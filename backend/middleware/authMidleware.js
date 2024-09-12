var jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandling/errorHandler");
const Users = require("../model/userModel");
const authMiddleware = async (req, res, next) => {
  try {
    let accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      return errorHandler(res, 404, "Oops! please login");
    }

    /** Verifying accessToken */
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    // console.log(decoded);

    if (!decoded) {
      return errorHandler(
        res,
        401,
        "Oops! Invalid accessToken please login with your credentials!"
      );
    }

    /** finding user */
    let user = await Users.findOne({ _id: decoded?.id }).select("-password");
    // console.log(user);

    if (!user) {
      return errorHandler(res, 401, "Oops! Invalid accessToken");
    }

    /** storing user in request */
    req.user = user;
    next();
  } catch (error) {
    return errorHandler(res, 401, error.message);
  }
};
module.exports = authMiddleware;
