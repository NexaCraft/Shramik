import jwt from "jsonwebtoken";

export const generateToken = (userId, userType) => {
  return jwt.sign({ userId, userType }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
    issuer: "ShramikPlatform",
    audience: "ShramikUsers",
  });
};
