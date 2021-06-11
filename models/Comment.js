const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  users:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
