const {
  addUser,
  getAllUser,
  updateUser,
} = require('../../api/v1/users/controllers');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();

router.post('/users', addUser);
router.get('/users', getAllUser);
router.put('/users', verifyToken, updateUser);

module.exports = router;
