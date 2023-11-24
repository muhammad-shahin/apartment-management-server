const Payment = require('../../../../models/Payment');

const getPaymentById = async (req, res) => {
  try {
    const userObjectId = req.params.userObjectId;

    const paymentHistory = await Payment.find({
      'apartmentInfo.user._id': userObjectId,
    });
    console.log('Payment History Data By User Object Id:', paymentHistory);
    res.status(200).send(paymentHistory);
  } catch (err) {
    console.log('Failed To Get payment History By User Object Id:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get payment History By User Object Id',
    });
  }
};

module.exports = getPaymentById;
