// src/middleware/authMiddleware.js

import jwt from "jsonwebtoken";

import User from "../models/User.js";

const protect = async (
  req,
  res,
  next
) => {
  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {
      token =
        req.headers.authorization.split(
          " "
        )[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        message:
          "Not authorized, no token",
      });
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find User
    req.user = await User.findById(
      decoded.id
    ).select("-password");

    next();
  } catch (error) {
    res.status(401).json({
      message: "Not authorized",
    });
  }
};

export default protect;