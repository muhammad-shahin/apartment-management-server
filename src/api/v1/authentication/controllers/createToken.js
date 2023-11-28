const generateToken = require('../../../../lib/authentication/generateToken');

const createToken = (req, res, next) => {
  try {
    const user = req.body;
    const token = generateToken(user);

    res.send({ success: true, token: `Bearer ${token}` });
  } catch (err) {
    next(err);
  }
};

module.exports = createToken;
