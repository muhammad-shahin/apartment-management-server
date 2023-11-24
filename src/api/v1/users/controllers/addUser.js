const User = require('../../../../models/User');

const addUser = async (req, res) => {
  try {
    const user = req.body;

    // Create a new User document
    const newUser = new User(user);

    // Save the new user to the 'User' collection
    const savedUser = await newUser.save();
    console.log('Saved User: ', savedUser);

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error Adding user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = addUser;
