// Imports
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const PORT = process.env.PORT || 8000;

// API
const users = require("./api/users");
const books = require("./api/books");
const restaurants = require("./api/restaurants");
const comments = require("./api/comments");
const attractions = require("./api/attractions");
const hotels = require("./api/hotels");
const favorites = require("./api/favorites");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Passport and use config file
app.use(passport.initialize());
require("./config/passport")(passport);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Smile, you are being watched by the Backend Engineering Team",
  });
});

// Routes
app.use("/api/users", users);
app.use("/api/books", books);
app.use("/api/restaurants", restaurants);
app.use("/api/hotels", hotels);
app.use("/api/comments", comments);
app.use("/api/attractions", attractions);
app.use("/api/favorites", favorites);

app.get("/*", (req, res) => {
  res.status(404).json({ message: "Data not found" });
});


app.listen(PORT, () => {
  console.log(`Server is listening 🎧 on port: ${PORT}`);
});
