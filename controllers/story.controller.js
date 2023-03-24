const express = require("express");
const router = express.Router();
const StoryModel = require("../models/Story.model");

//get
router.get("/", async (req, res) => {
  try {
    const allStories = await StoryModel.find().populate("sprintId");
    return res.status(200).send(allStories);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

// create
router.post("/create", async (req, res) => {
  const { story, sprintId, createdAt } = req.body;
  try {
    const stories = new StoryModel({ story, sprintId, createdAt });
    await stories.save();
    return res.status(201).send(stories);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

module.exports = router;
