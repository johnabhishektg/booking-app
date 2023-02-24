const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var cookieParser = require("cookie-parser");
const User = require("./models/User.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser());

//dheep123456

mongoose.connect(process.env.MONGO_URL);

const bsalt = bcrypt.genSaltSync(10);
const jwtSecret = "shhhhhh";

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bsalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.json("no match");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, dec) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(dec.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
