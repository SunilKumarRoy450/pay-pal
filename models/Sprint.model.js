const { Schema, model } = require("mongoose");

const SprintSchema = new Schema({
  sprintName: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SprintModel = new model("Task", SprintSchema);

module.exports = SprintModel;
