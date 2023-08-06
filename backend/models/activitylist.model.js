const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const activitySchema = new Schema({
  activity: { type: String, required: true },
});

// This Activity creates the collection called activitimodels
const Activitymodel = mongoose.model("Activitymodel", activitySchema);
module.exports = Activitymodel;