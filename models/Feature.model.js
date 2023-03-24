const { Schema, model } = require("mongoose");

const FeatureSchema = new Schema({
  feature: { type: String, required: true },
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

const FeatureModel = new model("Feature", FeatureSchema);

module.exports = FeatureModel;
