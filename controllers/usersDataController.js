const User = require("../models/user");
const csv = require("csvtojson");


// render home page
module.exports.home= function(req,res){
  return res.render('home');
}


// fetch all users  
module.exports.all= async function(req,res){
  try{
      let users=await User.find({});
      return res.status(200).json({
        users:users
      });
  }
  catch(err){
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
}

// fetch users profile 
module.exports.profile =async function(req, res){
  try{
      let user=await User.findById(req.params.id);
      return res.status(200).json({
        user:user
      });
  }
  catch(err){
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
}


// upload file action 
module.exports.uploadCsv =async (req, res) => {
  try {
      // converting csv data into array of json object 
      const dataArr = await csv().fromString(req.file.buffer.toString());
      for(let item of dataArr){
        let user =await User.create(item);
      }
      return res.status(200).json({
        message:"Users created successfully",
        users:dataArr
      });
      
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
}
