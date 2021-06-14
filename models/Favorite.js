const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const favoriteSchema = new Schema({
    businessId:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    businessType:{
        type: String,
        required: true
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;