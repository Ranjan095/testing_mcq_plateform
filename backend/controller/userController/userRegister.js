const bcrypt = require("bcrypt");
const Users = require("../../model/userModel");
const userRegister = async (req, res) => {
  try {
    let { fullName, email, password, profession, mobile, isAdmin } = req.body;

    /** Validation for all fields */
    if (!fullName || !email || !password || !profession) {
      return res.status(404).send({ error: "Please enter required fields" });
    }

    /** Validation for password length*/
    if (password.length < 8) {
      return res
        .status(401)
        .send({ error: "Password must be at least 8 characters" });
    }

    /** hass password using bcrypt */
    const hashPassword = bcrypt.hashSync(password, 10);
    if (!hashPassword) {
      return res
        .status(401)
        .send({ error: "Somthing went wrong while hashing password" });
    }

    /** Creating new user and storing hashing passwords */
    let newUser = new Users({
      fullName,
      email,
      password: hashPassword,
      profession,
      mobile,
      isAdmin: isAdmin ? true : false,
    });
    await newUser.save();

    return res
      .status(200)
      .send({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res.status(401).send({
      error: error.message,
    });
  }
};
module.exports = { userRegister };
