const User = require('../../models/User');

const findUserById = async (userId) => {
  try {
    const user = await User.findOne({ userId });
    return user;
  } catch (error) {
    console.log(
      'Error finding user by id from src/lib/users/findUserById.js : ',
      error
    );
  }
};

module.exports = findUserById;
