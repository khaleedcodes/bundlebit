import User from "../models/userModel.js";

const generateUniqueUsername = async (emailPrefix) => {
  // Remove any non-alphanumeric characters and sanitize
  const sanitized = emailPrefix.replace(/[^a-zA-Z0-9]/g, "");

  // Split into base name and optional numeric suffix
  const match = sanitized.match(/^(.+?)(\d+)?$/);
  let base = match[1];
  let number = parseInt(match[2] || "0", 10);
  let candidate = sanitized.slice(0, 20); // initial attempt

  // Loop until we find an available username
  while (await User.exists({ username: candidate })) {
    number++;
    // Keep base + number within 20 characters
    const suffix = String(number);
    const maxBaseLength = 20 - suffix.length;
    const trimmedBase = base.slice(0, maxBaseLength);
    candidate = `${trimmedBase}${suffix}`;
  }

  return candidate;
};

export default generateUniqueUsername;
