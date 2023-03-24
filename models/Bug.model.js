const { Schema, model } = require("mongoose");

const BugSchema = new Schema({
  bug: { type: String, required: true },
  sprintId: {
    type: Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BugModel = new model("Bug", BugSchema);

module.exports = BugModel;
