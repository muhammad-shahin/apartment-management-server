const {
  addNewCoupon,
  getAllCoupon,
  getCouponByCode,
} = require('../../api/v1/coupon/controllers');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();

router.post('/coupon', verifyToken, addNewCoupon);
router.get('/coupon', getAllCoupon);
router.get('/coupon/:couponCode', verifyToken, getCouponByCode);

module.exports = router;
