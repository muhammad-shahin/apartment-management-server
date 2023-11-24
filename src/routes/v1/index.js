const express = require('express');
const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');

const router = express.Router();

// Mount authentication routes
router.use(authenticationRoutes);

// Mount user routes
router.use(userRoutes);

module.exports = router;
