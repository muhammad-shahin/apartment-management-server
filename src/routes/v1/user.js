const {
  addUser,
  getAllUser,
  updateUser,
} = require('../../api/v1/users/controllers');

const router = require('express').Router();

router.post('/users', addUser);
router.get('/users', getAllUser);
router.put('/users', updateUser);

module.exports = router;
