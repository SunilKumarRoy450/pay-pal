const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  sprintName: { type: String, required: true },
  category: { type: String, required: true },
  taskDescription: { type: String },
  assignedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assigne: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = new model("Task", TaskSchema);

module.exports = TaskModel;
