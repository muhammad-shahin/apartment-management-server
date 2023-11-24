const { addNewCoupon } = require('../../api/v1/coupon/controllers');

const router = require('express').Router();

router.post('/coupon', addNewCoupon);

module.exports = router;
