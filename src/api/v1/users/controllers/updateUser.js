const User = require('../../../../models/User');

const updateUser = async (req, res) => {
  try {
    const updateInfo = req.body;
    const { userId, newRole } = updateInfo;
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId },
      { $set: { userRole: newRole } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).send({ success: false, message: 'User not found' });
    }

    res.status(200).send({ success: true, user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({ success: false, message: 'Error updating user' });
  }
};

module.exports = updateUser;
