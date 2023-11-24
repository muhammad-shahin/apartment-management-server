const addUser = require('../../api/v1/users');

const router = require('express').Router();

router.post('/users', addUser);

module.exports = router;
