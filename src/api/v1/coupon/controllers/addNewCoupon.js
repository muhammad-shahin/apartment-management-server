const Coupon = require('../../../../models/Coupon');
const addNewCoupon = async (req, res) => {
  try {
    const couponData = req.body;
    const newCoupon = new Coupon(couponData);
    const savedCoupon = await newCoupon.save();
    res.status(201).send({ success: true, savedCoupon });
  } catch (err) {
    console.log('Failed To Saved New Coupon : ', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Saved New Coupon',
    });
  }
};

module.exports = addNewCoupon;
