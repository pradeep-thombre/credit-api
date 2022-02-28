const mongoose = require("mongoose");

// connect to mongodb
// mongoose.connect("mongodb://localhost/hospital");
mongoose.connect("mongodb+srv://learningdemo068:HCsRDfy2vDs2KxN2@cluster0.gjf6r.mongodb.net/credit?retryWrites=true&w=majority");
//get the connection
const db = mongoose.connection;

// on error show error message on console
db.on(
  "error",
  console.error.bind(console, "Error connecting to the database :: MongoDB")
);

// on successful connection show successful message
db.once("open", () =>
  console.log("Successfully connected to the db :: MongoDB")
);

module.exports = db;
