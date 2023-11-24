const {
  addNewCoupon,
  getAllCoupon,
  getCouponByCode,
} = require('../../api/v1/coupon/controllers');

const router = require('express').Router();

router.post('/coupon', addNewCoupon);
router.get('/coupon', getAllCoupon);
router.get('/coupon/:couponCode', getCouponByCode);

module.exports = router;
