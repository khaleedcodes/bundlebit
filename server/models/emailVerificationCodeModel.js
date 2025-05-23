import mongoose from "mongoose";

const emailVerificationCodeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    purpose: {
      type: String,
      enum: ["signup", "email_change", "password_reset"],
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const EmailVerificationCode = new mongoose.model(
  "EmailVerificationCode",
  emailVerificationCodeSchema
);

export default EmailVerificationCode;
