const {
  createUser,
  logout,
} = require('../../api/v1/authentication/controllers');

const router = require('express').Router();

router.post('/jwt', createUser);
router.post('/logout', logout);

module.exports = router;
