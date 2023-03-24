const express = require("express");
const cors = require("cors");
const PORT = 8080;
const connectDB = require("./config/db");
const app = express();

//controllers
const UserRouter = require("./controllers/user.controller");
const SprintRouter = require("./controllers/sprint.controller");
const BugRouter = require("./controllers/bug.controller");
const StoryRouter = require("./controllers/story.controller");
const FeatureRouter = require("./controllers/feature.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use("/users", UserRouter);
app.use("/sprints", SprintRouter);
app.use("/bugs", BugRouter);
app.use("/stories", StoryRouter);
app.use("/features", FeatureRouter);


app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on Port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
