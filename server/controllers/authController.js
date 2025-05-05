import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import fetch from "node-fetch";
import generateUniqueUsername from "../helpers/generateUniqueUsername.js";

const registerUser = async (req, res) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let { email, username, password } = req.body;
    email = email.toLowerCase().trim();
    username = username.toLowerCase().trim();
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const usernameRegex = /^[A-Za-z0-9_-]{1,20}$/;
    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message:
          "Username can only contain letters, numbers, underscores, and dashes, and must be 1 to 15 characters long",
      });
    }

    const isEmailExists = await User.exists({ email });
    if (isEmailExists)
      return res.status(400).json({ message: "Email Address already in use" });

    const isUsernameExists = await User.exists({ username });
    if (isUsernameExists)
      return res.status(400).json({ message: "Username already taken" });

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*./])[A-Za-z\d!@#$%^&*./]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. !, @, #, $, %, ^, &, , ., /).",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      authProvider: "bundleup",
      emailVerified: false,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: `account: ${newUser.username} created`,
      token,
      user: {
        id: newUser.id.toString(),
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const googleAuthentication = async (req, res) => {
  const sendAuthResponse = (res, user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({
      message: `account: ${user.username} logged in`,
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  };

  try {
    const { access_token } = req.body;
    if (!access_token) {
      return res.status(400).json({ message: "Access token required" });
    }
    const googleRes = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    if (!googleRes.ok) {
      return res.status(401).json({ message: "Invalid Google access token" });
    }

    const googleData = await googleRes.json();
    const {
      sub,
      name,
      given_name,
      family_name,
      picture,
      email,
      email_verified,
    } = googleData;
    const user = await User.findOne({ email });
    if (user) {
      sendAuthResponse(res, user);
      console.log("exists");
    } else {
      let username = email.split("@")[0];
      const isUsernameExists = await User.exists({ username });
      if (isUsernameExists) {
        username = await generateUniqueUsername(username);
      }
      const newUser = await new User({
        email,
        username,
        authProvider: "google",
        googleId: sub,
        emailVerified: email_verified,
        name,
        givenName: given_name,
        familyName: family_name,
        profilePicture: picture,
      });
      await newUser.save();
      sendAuthResponse(res, newUser);
      console.log("created");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    identifier = identifier.toLowerCase().trim();

    const user =
      (await User.findOne({ username: identifier })) ||
      (await User.findOne({ email: identifier }));
    if (!user) {
      return res
        .status(404)
        .json({ message: `No user found with identifier: ${identifier}` });
    }
    if (user.authProvider === "google")
      return res.status(401).json({
        message:
          'It looks like you signed up with Google. Please click "Continue with Google" to log in with your Google account.',
      });
    const hashedPassword = user.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch)
      return res.status(404).json({ message: "invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({
      message: `account: ${user.username} logged in`,
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

export { registerUser, loginUser, googleAuthentication };
