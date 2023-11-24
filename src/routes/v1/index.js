const express = require('express');
const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');
const apartmentRoutes = require('./apartment');
const bookedApartmentRoutes = require('./bookedApartment');
const couponRoutes = require('./coupon');
const paymentRoutes = require('./payment');
const announcementRoutes = require('./announcement');

const router = express.Router();

router.use(authenticationRoutes);
router.use(userRoutes);
router.use(apartmentRoutes);
router.use(bookedApartmentRoutes);
router.use(couponRoutes);
router.use(paymentRoutes);
router.use(announcementRoutes);

module.exports = router;
