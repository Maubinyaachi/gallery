const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");



// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// connecting the database
let mongodb_url =
  "mongodb+srv://maubinehemiah:kemmy1998@moringacluster.mnxrreo.mongodb.net/?retryWrites=true&w=majority&appName=MoringaCluster";
// let dbName = 'darkroom';
mongoose.connect(
  mongodb_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

// test if the database has connected successfully
let db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected successfully");
});

// Initializing the app
const app = express();

// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = server;
