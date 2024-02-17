const mongoose = require("mongoose");

const dbConnection = mongoose
  .connect(
    "mongodb+srv://admin:BauseZOrSWJ8Sm5q@cluster0.e2jfnht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

  

module.exports = dbConnection;
