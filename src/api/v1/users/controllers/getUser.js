const findUserById = require('../../../../lib/users/findUserById');

const getUser = async (req, res) => {
  try {
    const user = await console.log('Saved User: ', savedUser);

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error Adding user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getUser;
