const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: Number,
  reviews: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
