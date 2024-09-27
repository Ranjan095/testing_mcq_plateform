const express = require("express");
const { userLogin } = require("../controller/userController/userLogin");
const { userRegister } = require("../controller/userController/userRegister");
const authMiddleware = require("../middleware/authMidleware");
const userLogout = require("../controller/userController/userLogout");
const getAllUsers = require("../controller/userController/getAllUsers");
const deleteUserById = require("../controller/userController/deleteUser");
const updateUserById = require("../controller/userController/updateUser");
const getUserById = require("../controller/userController/getUserById");
const {
  getTestByUserId,
} = require("../controller/userController/getTestByUserId");
const {
  getTestByTestId,
} = require("../controller/userController/getTestByTestId");
const {
  userTestSubmit,
} = require("../controller/userController/userTestSubmit");
const {
  getAllSolvedTestByUserId,
} = require("../controller/userController/getAllSolvedTestByUserId");

const userRoute = express.Router();

/** Routs for createUser */
userRoute.post("/create", userRegister);

/** Routs for loginUser */
userRoute.post("/login", userLogin);
userRoute.post("/logout", authMiddleware, userLogout);

userRoute.get("/getAllUsers", authMiddleware, getAllUsers);
userRoute.delete("/delete-user", authMiddleware, deleteUserById);
userRoute.patch("/update-user", authMiddleware, updateUserById);
userRoute.get("/get-user", authMiddleware, getUserById);
userRoute.get("/test", authMiddleware, getTestByUserId);
userRoute.get("/test/:testId", authMiddleware, getTestByTestId);
userRoute.post("/test/submit-test", authMiddleware, userTestSubmit);
userRoute.get("/solved-test", authMiddleware, getAllSolvedTestByUserId);

module.exports = userRoute;
