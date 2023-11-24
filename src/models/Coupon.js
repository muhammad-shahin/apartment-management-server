const { model, Schema } = require('mongoose');

const CouponSchema = new Schema({
  couponCode: {
    type: String,
    required: true,
  },
  couponExpiryDate: {
    type: String,
    required: true,
  },
});

const Coupon = model('Coupon', CouponSchema, 'coupons');
module.exports = Coupon;
