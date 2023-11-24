const createToken = require('../../../../lib/authentication/createToken');

const createUser = (req, res, next) => {
  try {
    const user = req.body;
    const token = createToken(user);

    res.send({ success: true, token: `Bearer ${token}` });
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
