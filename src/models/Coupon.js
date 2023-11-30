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
    couponDescription: {
      type: String,
      required: false,
    },
    discount: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Coupon = model('Coupon', CouponSchema, 'coupons');
module.exports = Coupon;
