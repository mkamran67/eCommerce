import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token
      token = req.headers.authorization.split(' ')[1];

      // verify and decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user info -password
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error(`Not authorized.`);
    }
  }
  if (!token) {
    console.log(`huh`);
    res.status(401);
    throw new Error('Not authorized, invalid token.');
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized - Admin only.');
  }
};

export { protect, isAdmin };
