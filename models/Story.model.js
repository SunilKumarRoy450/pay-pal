const { Schema, model } = require("mongoose");

const StorySchema = new Schema({
  story: { type: String, required: true },
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

const StoryModel = new model("Story", StorySchema);

module.exports = StoryModel;
