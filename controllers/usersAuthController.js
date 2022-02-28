const User = require("../models/user");
const jwt = require("jsonwebtoken");
const fs=require('fs');
const path=require('path');

//register User
module.exports.register = async (req, res) => {
  try {
    User.uploadedAvatar(req,res, async function(err){
      if(err){
        console.log('*****Multer error:',err);
      }
      
      if (req.body.password !== req.body.confirm_password) {
        return res.status(400).json({
          message: "password doesn't match",
        });
      }

      let userExist = await User.findOne({ email: req.body.email });

      if (userExist) {
        return res.status(400).json({ 
          message: "User already exists!!" 
        });
      }
      
      let data={
        ...req.body,
        avatar:User.avatarPath+'/'+req.file.filename
      }

      user = await User.create(data);

      return res.status(200).json({
        message: "User successfully registered",
        user:user
      });
    });
        
  }catch (err) {

    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};



module.exports.login = async (req, res) => {
  try {

    let userExist = await User.findOne({ email: req.body.email });

    if (!userExist || userExist.password !== req.body.password) {
      return res.status(422).json({ 
        message: "Invalid Username/Password" 
      });
    }

    //log in User successfully
    return res.status(200).json({
      message: "Log in successful",
      data: {
        token: jwt.sign(userExist.toJSON(), "creditCredentials", {
          expiresIn: "400000000",
        }),
      },
    });
  } 
  catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};



//register User
module.exports.update = async (req, res) => {
  try {
    let user=await User.findById(req.params.id);

    User.uploadedAvatar(req,res,function(err){
      if(err){
        console.log('*****Multer error:',err);
      }

      user.name=(typeof req.body.name === 'undefined') ? user.name : req.body.name;
      user.phone=(typeof req.body.phone === 'undefined') ? user.phone : req.body.phone;
      user.city=(typeof req.body.city === 'undefined') ? user.city : req.body.city;
      user.state=(typeof req.body.state === 'undefined') ? user.state : req.body.state;
      user.age=(typeof req.body.age === 'undefined') ? user.age : req.body.age;
      user.country=(typeof req.body.country === 'undefined') ? user.country : req.body.country;
      user.age=(typeof req.body.age === 'undefined') ? user.age : req.body.age;
      
      if(req.file){
        if(user.avatar){
          fs.unlinkSync(path.join(__dirname,'..',user.avatar));
        }
        user.avatar=User.avatarPath+'/'+req.file.filename;
        user.save();
      };

      return res.status(200).json({
        message: "User data successfully updated",
        user:user
      });
    });
        
  }catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};