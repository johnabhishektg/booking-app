const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");
require("dotenv").config();
const app = express();

app.use(express.json());
//dheep123456

mongoose.connect(process.env.MONGO_URL);

const bsalt = bcrypt.genSaltSync(10);

app.use(
  cors({
    credentials: "true",
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bsalt),
  });

  res.json(userDoc);
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
