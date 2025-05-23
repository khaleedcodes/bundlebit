import EmailVerificationCode from "../models/emailVerificationCodeModel.js";
import generateVerificationCode from "../helpers/generateVerificationCode.js";

async function registerEmailVerificationCode(req, res) {
  try {
    const validityPeriodMs = 10 * 60 * 1000;
    const coolDownSeconds = 60;
    const { email, purpose } = req.body;

    if (!email || !purpose) {
      return res.status(400).json({ error: "Email and purpose are required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    const code = generateVerificationCode();
    const expiresAt = new Date(Date.now() + validityPeriodMs);
    const newEmailVerificationCode = new EmailVerificationCode({
      email,
      code,
      expiresAt,
      purpose,
    });
    await newEmailVerificationCode.save();

    res
      .status(200)
      .json({ message: "Verification code created", coolDownSeconds });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function validateEmailVerificationCode(req, res) {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ message: "Email and code are required." });
    }

    const foundEmailVerificationCode = await EmailVerificationCode.findOne({
      email,
    });

    if (!foundEmailVerificationCode) {
      return res.status(400).json({ message: "Invalid verification code." });
    }

    if (foundEmailVerificationCode.code !== code) {
      return res.status(400).json({ message: "Invalid verification code." });
    }

    if (Date.now() > foundEmailVerificationCode.expiresAt.getTime()) {
      return res.status(400).json({ message: "Verification code expired." });
    }

    return res.status(200).json({ message: "Verification code validated." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
}

export { registerEmailVerificationCode, validateEmailVerificationCode };
