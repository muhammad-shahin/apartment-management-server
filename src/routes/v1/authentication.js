const {
  createToken,
  logout,
} = require('../../api/v1/authentication/controllers');

const router = require('express').Router();

router.post('/jwt', createToken);
router.post('/logout', logout);

module.exports = router;
