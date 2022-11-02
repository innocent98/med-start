const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Waitlist = require("./models/Waitlist");

dotenv.config();

// connect to database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// endpoints
app.post("/api/join", async (req, res) => {
  try {
    const newUser = new Waitlist(req.body);
    await newUser.save();
    res.status(200).json("Success");
  } catch (error) {
    console.log(error)
  }
});

// connect to the server
app.listen(process.env.PORT || 8003, () => {
  console.log("Server running on port 8003");
});
