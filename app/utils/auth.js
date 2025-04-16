import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export function hashPassword(password) {
  return bcrypt.hashSync(password, parseInt(process.env.BCRYPT_ROUNDS));
}

export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

export function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY_TIME,
  });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_TIME,
  });
}

export function verifyToken(request) {
  const authorization = request.headers.get("authorization");

  if (!authorization) {
    return null;}

  const token = authorization.replace("Bearer ", "").trim();

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET); 
    return decode; // this already returns payload
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function verifyRefreshToken(refreshToken) {
    try {
        return jwt.verify(refreshToken, process.env.REFRESH_SECRET); // returns payload
    } catch (error) {
        console.error("Refresh token verification failed:", error.message);
        return null;
    }
}