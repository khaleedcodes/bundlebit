import rateLimit from "express-rate-limit";

// Create rate limiter middleware
const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per 15 minutes
  message:
    "Too many accounts created from this IP, please try again after 15 minutes",
});

export default registerLimiter;
