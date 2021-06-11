const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Event", eventSchema);
module.exports = Event;
