const User = require('../../../../models/User');

const addUser = async (req, res) => {
  try {
    const user = req.body;
    const { userId } = user;

    // check is user already exist
    const exist = await User.findOne({ userId: userId });
    if (exist) {
      console.log('user exist', exist);
      return res.send({ success: true, registeredUser: exist });
    }

    // Create a new User document
    const newUser = new User(user);

    // Save the new user to the 'users' collection
    const savedUser = await newUser.save();
    console.log('Saved User: ', savedUser);

    res.status(201).json({ success: true, registeredUser: savedUser });
  } catch (error) {
    console.error('Error Adding user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = addUser;
