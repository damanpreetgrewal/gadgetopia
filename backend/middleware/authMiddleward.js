import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    //console.log("token: ", req.headers.authorization);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded: ", decoded);
    User.findById(decoded.id)
      .then((result) => {
        req.user = result;
        next();
      })
      .catch((err) => {
        console.error(err.message);
        res.status(401);
      });
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , token failed!");
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("You Dont Have That Permission");
  }
};
export { protect, admin };
