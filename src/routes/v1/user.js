const { addUser, getAllUser } = require('../../api/v1/users/controllers');

const router = require('express').Router();

router.post('/users', addUser);
router.get('/users', getAllUser);

module.exports = router;
