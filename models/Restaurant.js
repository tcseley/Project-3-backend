const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: {
        type: String
      },
      location: {
        type: String
      },
      review: {
        type: String
      },
      price: {
        type: Number
      },
      phone: {
        type: Number
      },
      image_url: {
        type: String
      },
      User: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      Blog: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
      }
    });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;