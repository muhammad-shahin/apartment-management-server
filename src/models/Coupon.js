const { model, Schema } = require('mongoose');

const CouponSchema = new Schema(
  {
    couponCode: {
      type: String,
      required: true,
    },
    couponExpiryDate: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Coupon = model('Coupon', CouponSchema, 'coupons');
module.exports = Coupon;
