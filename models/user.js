const mongoose = require("mongoose");
const multer=require('multer');
const path=require('path');
const { nextTick } = require("process");
const AVATAR_PATH=path.join('/static');
//doctor schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    avatar: {
      type: String
    },
    phone: {
      type: String,
    },
    email: {
      required: true,
      type: String
    },
    age: {
      type: Number
    },
    place: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    state: {
      type: String
    },
    password: {
      type: String,
      default:"test@123"
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'..', AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});


userSchema.statics.uploadedAvatar=multer({storage:storage}).single('avatar');
userSchema.statics.avatarPath=AVATAR_PATH;

// export doctor schema
const User = mongoose.model("User", userSchema);
module.exports = User ;