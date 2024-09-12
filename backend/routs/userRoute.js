const express = require("express");
const { userLogin } = require("../controller/userController/userLogin");
const { userRegister } = require("../controller/userController/userRegister");
const authMiddleware = require("../middleware/authMidleware");
const userLogout = require("../controller/userController/userLogout");
const getAllUsers = require("../controller/userController/getAllUsers");
const deleteUserById = require("../controller/userController/deleteUser");
const updateUserById = require("../controller/userController/updateUser");

const userRoute = express.Router();

/** Routs for createUser */
userRoute.post("/create", userRegister);

/** Routs for loginUser */
userRoute.post("/login", userLogin);
userRoute.post("/logout", authMiddleware, userLogout);

userRoute.get("/getAllUsers", authMiddleware, getAllUsers);
userRoute.delete("/delete-user", authMiddleware, deleteUserById);
userRoute.patch("/update-user", authMiddleware, updateUserById);

module.exports = userRoute;
