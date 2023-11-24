const Coupon = require('../../../../models/Coupon');

const getAllCoupon = async (req, res) => {
  try {
    const allCoupons = await Coupon.find();

    console.log('All Coupons Data:', allCoupons);

    res.status(200).send(allCoupons);
  } catch (err) {
    console.log('Failed To Get All Coupons Code:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get All Coupons Code',
    });
  }
};

module.exports = getAllCoupon;
