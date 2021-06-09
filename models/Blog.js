const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String
      },
      body: {
        type: String
      },
      author: {
        type: String
      }
    });
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;