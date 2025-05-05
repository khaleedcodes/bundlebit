import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    displayname: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    authProvider: {
      type: String,
      required: true,
      enum: ["bundleup", "google"],
      trim: true,
      lowercase: true,
    },
    googleId: {
      type: String,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      lowercase: true,
    },
    familyName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    givenName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    profilePicture: {
      type: String,
      trim: true,
      lowercase: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
