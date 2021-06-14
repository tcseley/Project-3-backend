const mongoose = require("mongoose");
const { Schema } = mongoose;

const attractionSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Attraction = mongoose.model("Attraction", attractionSchema);
module.exports = Attraction;
