import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import fetch from "node-fetch";
import {
  generateUniqueUsername,
  generateUsernameSuggestions,
} from "../helpers/generateUniqueUsername.js";
import sendAuthResponse from "../helpers/sendAuthResponse.js";

import { createBundle } from "./bundleController.js";

const checkUsernameExists = async (req, res) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res
        .status(400)
        .json({ message: "Username query param is required" });
    }

    const isUsernameExists = await User.exists({ username });
    if (isUsernameExists) {
      const usernameSuggestions = await generateUsernameSuggestions(username);
      return res.status(409).json({
        isUsernameAvailable: false,
        message: "Username already taken",
        suggestions: usernameSuggestions,
      });
    }
    res.status(200).json({
      isUsernameAvailable: true,
      message: "Username is available",
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const checkEmailExists = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email query param is required" });
    }

    const isEmailExists = await User.exists({ email });
    if (isEmailExists) {
      return res.status(409).json({
        message: "Email Address already in use",
        isEmailExists: true,
      });
    }
    res
      .status(200)
      .json({ message: "Email Address not in use", isEmailExists: false });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const registerUser = async (req, res) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[A-Za-z0-9_-]{1,20}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*./])[A-Za-z\d!@#$%^&*./]{8,}$/;

    let { email, username, password } = req.body;
    email = email.toLowerCase().trim();
    username = username.toLowerCase().trim();

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message:
          "Username can only contain letters, numbers, underscores, and dashes, and must be 1 to 15 characters long",
      });
    }

    const isEmailExists = await User.exists({ email });
    if (isEmailExists)
      return res.status(409).json({ message: "Email Address already in use" });

    const isUsernameExists = await User.exists({ username });
    if (isUsernameExists)
      return res.status(409).json({ message: "Username already taken" });

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
      emailVerified: false,
      authProvider: "bundlebit",
    });
    await newUser.save();

    req.user = newUser;
    await createBundle(req, res);
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const loginUser = async (req, res) => {
  try {
    let { identifier, password } = req.body;
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
      return res.status(401).json({ message: "invalid credentials" });
    sendAuthResponse(res, user, false);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const googleAuthentication = async (req, res) => {
  try {
    const { access_token, username: reqUsername } = req.body;
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
      // picture,
      email,
      email_verified,
    } = googleData;
    const user = await User.findOne({ email });
    if (user) {
      sendAuthResponse(res, user, false);
    } else {
      const username = reqUsername || email.split("@")[0];
      const isUsernameExists = await User.exists({ username });
      if (isUsernameExists) {
        username = await generateUniqueUsername(username);
      }
      const newUser = await new User({
        email,
        username,
        emailVerified: email_verified,
        authProvider: "google",
        googleId: sub,
        name,
        familyName: family_name,
        givenName: given_name,
        // profilePicture: picture,
      });
      await newUser.save();

      req.user = newUser;
      await createBundle(req, res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyToken = async (req, res) => {
  const user = req.user;
  if (!user) return res.status(401).json({ message: "User no longer exists" });
  sendAuthResponse(res, user, false);
};

export {
  registerUser,
  loginUser,
  googleAuthentication,
  verifyToken,
  checkUsernameExists,
  checkEmailExists,
};
