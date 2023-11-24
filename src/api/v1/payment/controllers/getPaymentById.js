const Payment = require('../../../../models/Payment');

const getPaymentById = async (req, res) => {
  try {
    // const userObjectId = req.params.userObjectId;
    // const filter = { user: userObjectId };
    const paymentHistory = await Payment.find().populate({
      path: 'apartmentInfo',
      populate: [
        { path: 'user' }, // Populate the 'user' field inside 'apartmentInfo'
        { path: 'apartment' }, // Populate the 'apartment' field inside 'apartmentInfo'
      ],
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
