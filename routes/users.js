const express = require("express");
const route = express.Router();

const usersAuthController = require("../controllers/usersAuthController");
upload=require('../config/multer');

//user register 
route.post("/register", usersAuthController.register);

//user login
route.post("/login", usersAuthController.login);

//update user data
route.post("/update/:id", usersAuthController.update);

module.exports = route;
