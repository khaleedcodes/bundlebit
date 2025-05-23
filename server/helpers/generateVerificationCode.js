import crypto from "crypto";

const generateVerificationCode = () => crypto.randomInt(100000, 999999);

export default generateVerificationCode;
