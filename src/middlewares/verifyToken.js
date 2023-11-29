require('dotenv').config();

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'unauthorized access no token' });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res
        .status(401)
        .send({ message: 'unauthorized access invalid token' });
    }
    req.user = decode;
    next();
  });
};

module.exports = verifyToken;
