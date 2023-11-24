const findUserById = require('../lib/users/findUserById');

const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const user = await findUserById(userId);

    if (user && user.userRole === 'admin') {
      next();
    } else {
      return res.status(403).send({ message: 'Forbidden access' });
    }
  } catch (error) {
    console.error('Error verifying admin:', error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = verifyAdmin;
