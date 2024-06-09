const axios = require("axios");
const mongoose = require("mongoose");
const User = require("./User");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const databaseUrl = process.env.CONNECTION_STRING;
mongoose.connect(databaseUrl);

async function checkEmailExists(userEmail) {
  return await User.exists({ email: userEmail });
}
async function checkUsernameExists(enteredUsername) {
  return await User.exists({ username: enteredUsername });
}

app.post("/signup", async (req, res) => {
  const foundUserEmail = await checkEmailExists(req.body.email);
  const foundUsername = await checkUsernameExists(req.body.username);
  if (foundUserEmail || foundUsername) {
    console.log("user exists", foundUserEmail, foundUsername);
  } else {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
    console.log("user created");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success" });
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.get("/ping", (req, res) => {
  console.log("pinged");
  res.send("pong");
});

//self-ping function to keep the server awake
function keepServerAwake() {
  setInterval(async () => {
    try {
      // await axios.get("https://bundleup-server.onrender.com/ping");
      await axios.get("https://bundleup-fullstack.onrender.com/ping");
      console.log("Self-ping successful");
    } catch (err) {
      console.error("Self-ping failed: ", err.message);
    }
  }, 780000); // ping every 13 minutes
}

app.listen(3001, () => {
  console.log("server is running on port 3001");
  keepServerAwake();
});
