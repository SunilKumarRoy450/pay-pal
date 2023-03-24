const express = require("express");
const cors = require("cors");
const PORT = 8080;
const connectDB = require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on Port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
