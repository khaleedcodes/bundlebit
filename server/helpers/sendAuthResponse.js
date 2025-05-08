import jwt from "jsonwebtoken";

const sendAuthResponse = (res, user, isRegister = true) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(isRegister ? 201 : 200).json({
    message: isRegister
      ? `account: ${user.username} successfully registered and logged in`
      : `account: ${user.username} logged in`,
    token,
    user: {
      id: user._id || "",
      email: user.email || "",
      username: user.username || "",
      emailVerified: user.emailVerified || false,
      profilePicture: user.profilePicture || "",
      bundles: user.bundles || [],
    },
  });
};

export default sendAuthResponse;
