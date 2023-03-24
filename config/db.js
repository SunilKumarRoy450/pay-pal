const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(
      `mongodb://paypal:paypal@ac-zm1m5q1-shard-00-00.euhbxan.mongodb.net:27017,ac-zm1m5q1-shard-00-01.euhbxan.mongodb.net:27017,ac-zm1m5q1-shard-00-02.euhbxan.mongodb.net:27017/?ssl=true&replicaSet=atlas-1023hd-shard-0&authSource=admin&retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to DataBase"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
