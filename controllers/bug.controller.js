const express = require("express");
const router = express.Router();
const BugModel = require("../models/Bug.model");

//get
router.get("/", async (req, res) => {
  try {
    const allBugs = await BugModel.find().populate("sprintId");
    return res.status(200).send(allBugs);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

// create
router.post("/create", async (req, res) => {
  const { bug, sprintId, createdAt } = req.body;
  try {
    const bugs = new BugModel({ bug, sprintId, createdAt });
    await bugs.save();
    return res.status(201).send(bugs);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

module.exports = router;
