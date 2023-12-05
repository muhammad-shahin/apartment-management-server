const User = require('../../../../models/User');

const getAllUser = async (req, res) => {
  try {
    const userId = req.query.uid;
    console.log('user uid outside  : ', userId);
    if (userId) {
      console.log('user uid inside : ', userId);
      const registeredUser = await User.findOne({ userId });
      console.log('registeredUser lenghth : ', registeredUser);
      if (registeredUser) {
        return res.send({ success: true, registeredUser });
      }
    }
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    console.error('Error getting all user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getAllUser;
