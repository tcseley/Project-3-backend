const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Book = mongoose.model("Event", eventSchema);
module.exports = Event;
