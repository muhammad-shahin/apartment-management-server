const express = require('express');
const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');

const router = express.Router();

router.use(authenticationRoutes);

router.use(userRoutes);

module.exports = router;
