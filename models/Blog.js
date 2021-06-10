const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
