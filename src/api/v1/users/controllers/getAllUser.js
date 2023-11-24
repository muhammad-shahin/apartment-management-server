const User = require('../../../../models/User');

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    console.error('Error getting all user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getAllUser;
