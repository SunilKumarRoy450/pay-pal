const express = require("express");
const router = express.Router();
const TaskModel = require("../models/Task.model");

//get

router.get("/", async (req, res) => {
  try {
    const allTasks = await TaskModel.find()
      .populate("assignedBy")
      .populate("assigne");
    return res.status(200).send(allTasks);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

//create tasks
router.post("/create", async (req, res) => {
  const {
    sprintName,
    category,
    assignedBy,
    assigne,
    taskDescription,
    createdAt,
  } = req.body;
  try {
    const tasks = new TaskModel({
      sprintName,
      category,
      assignedBy,
      assigne,
      taskDescription,
      createdAt,
    });
    await tasks.save();
    return res.status(201).send(tasks);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

module.exports = router;
