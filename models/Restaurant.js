const mongoose = require('mongoose');
const Comment = require('./Comment')


const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: {
        type: String
      },
      location: {
        type: String
      },
      review: [{
        type: String
      }],
      price: {
        type: Number
      },
      phone: {
        type: Number
      },
      image_url: {
        type: String
      },
      users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
      comments: [Comment.schema],
    });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;