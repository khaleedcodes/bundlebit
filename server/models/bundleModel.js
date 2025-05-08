import mongoose from "mongoose";

const bitSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  url: { type: String, required: true, trim: true },
  icon: { type: String, trim: true },
  isPinned: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
});

const bundleSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    bundleName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    displayName: { type: String, required: true, trim: true },
    bio: { type: String, trim: true },
    profilePicture: { type: String, trim: true },
    bits: [bitSchema],
    theme: {
      type: String,
      default: "default",
    },
    isPublic: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Bundle = mongoose.model("Bundle", bundleSchema);

export default Bundle;
