const mongoose = require('mongoose');

const badRequest = (message) => {
  const err = new Error(message);
  err.statusCode = 400;
  return err;
};

// Ensures :id is a valid MongoDB ObjectId
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(badRequest('Product ID is not valid'));
  }
  next();
};

// Ensures the body is a non-empty object
const requireBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return next(badRequest('Request body is empty'));
  }
  next();
};

// Ensures stock change is a non-zero integer
const validateStockChange = (req, res, next) => {
  const { change } = req.body || {};
  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return next(badRequest('"change" must be a non-zero integer (positive = restock, negative = sale)'));
  }
  next();
};

module.exports = { validateObjectId, requireBody, validateStockChange };
