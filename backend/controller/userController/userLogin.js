const Users = require("../../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const errorHandler = require("../../utils/errorHandling/errorHandler");

let userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    /** validation for email and password */
    if (!email || !password) {
      return errorHandler(res, 401, "please enter required fields");
    }
    /** finding user with email */
    let user = await Users.findOne({ email });

    if (!user) {
      return errorHandler(res, 404, "Oops enter your correct email");
    }

    /** checking password using bcrypt */
    const isCorrectPassword = bcrypt.compareSync(password, user?.password);
    if (!isCorrectPassword) {
      return errorHandler(res, 404, "Oops password is incorrect");
    }

    /** creating accessToken using JWT */
    const accessToken = jwt.sign(
      { id: user?._id, name: user?.fullName, email: user?.email },
      process.env.ACCESS_TOKEN_SECRET
      // { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    if (!accessToken) {
      return errorHandler(
        res,
        401,
        "Somthing went wrong while generating accessToken"
      );
    }

    return res.status(200).send({
      message: "login successfull",
      accessToken,
      fullName: user?.fullName,
      isAdmin: user?.isAdmin,
    });
  } catch (error) {
    return errorHandler(res, 401, error.message);
  }
};

module.exports = { userLogin };
