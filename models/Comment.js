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
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
