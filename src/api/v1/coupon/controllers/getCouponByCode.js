const Coupon = require('../../../../models/Coupon');

const getCouponByCode = async (req, res) => {
  try {
    const couponCode = req.params.couponCode;
    const filter = { couponCode: couponCode };
    const coupon = await Coupon.findOne(filter);
    if (!coupon) {
      return res
        .status(404)
        .send({ success: false, message: 'Invalid Coupon Code' });
    }
    const couponExpiryDate = new Date(coupon.couponExpiryDate);
    const currentDate = new Date();
    if (couponExpiryDate < currentDate) {
      return res
        .status(401)
        .send({ success: false, message: 'Coupon Expired' });
    }

    console.log('Coupons Data by Code:', coupon);
    res.status(200).send(coupon);
  } catch (err) {
    console.log('Failed To Get Coupons Code by Code:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get Coupons Code by Code',
    });
  }
};

module.exports = getCouponByCode;
