const express = require("express");
const cors = require("cors");
const PORT = 8080;
const connectDB = require("./config/db");
const app = express();

//controllers
const userRouter = require("./controllers/user.controller");
const taskRouter = require("./controllers/task.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on Port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
