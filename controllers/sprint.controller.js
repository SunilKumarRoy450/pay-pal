const express = require("express");
const router = express.Router();
const SprintModel = require("../models/Sprint.model");

//get
router.get("/", async (req, res) => {
  try {
    const allSprints = await SprintModel.find().populate("userId");
    return res.status(200).send(allSprints);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

// create
router.post("/create", async (req, res) => {
  const { sprintName, userId, createdAt } = req.body;
  try {
    const sprints = new SprintModel({ sprintName, userId, createdAt });
    await sprints.save();
    return res.status(201).send(sprints);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

module.exports = router;
