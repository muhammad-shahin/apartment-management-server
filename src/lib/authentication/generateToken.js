const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateToken = (user) => {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '7d',
  });
  return token;
};

module.exports = generateToken;
