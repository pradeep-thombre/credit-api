// importing libraries and controllers
const express=require('express');
const route=express.Router();

const usersDataController = require("../controllers/usersDataController");

route.use('/users',require('./users'));

//get user profile
route.get("/profile/:id", usersDataController.profile);

//get all users
route.get("/all", usersDataController.all);

//upload csv file
route.post("/uploadCSV",upload.single("file"),usersDataController.uploadCsv);

route.use('/',usersDataController.home);
module.exports = route;

