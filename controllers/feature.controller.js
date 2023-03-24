const express = require("express");
const router = express.Router();
const FeatureModel = require("../models/Feature.model");

//get
router.get("/", async (req, res) => {
  try {
    const allFeatures = await FeatureModel.find().populate("sprintId");
    return res.status(200).send(allFeatures);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

// create
router.post("/create", async (req, res) => {
  const { feature, sprintId, createdAt } = req.body;
  try {
    const features = new FeatureModel({ feature, sprintId, createdAt });
    await features.save();
    return res.status(201).send(features);
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
});

module.exports = router;
