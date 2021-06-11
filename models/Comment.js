const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
