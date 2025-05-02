import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const isEmailExists = await User.exists({ email });
    if (isEmailExists)
      return res.status(400).json({ message: "Email Address already in use" });

    const isUsernameExists = await User.exists({ username });
    if (isUsernameExists)
      return res.status(400).json({ message: "Username already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: `account: ${newUser.username} created`,
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const user =
      (await User.findOne({ username: identifier })) ||
      (await User.findOne({ email: identifier }));
    if (!user) {
      return res
        .status(404)
        .json({ message: `No user found with identifier: ${identifier}` });
    }
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

export { registerUser, loginUser };
