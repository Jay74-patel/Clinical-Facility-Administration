const mongoose = require("mongoose");

const dbConnection = mongoose
  .connect(
    "mongodb+srv://admin:BauseZOrSWJ8Sm5q@cluster0.e2jfnht.mongodb.net/Users"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

  

module.exports = dbConnection;
