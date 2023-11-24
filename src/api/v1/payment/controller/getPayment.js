const Payment = require('../../../../models/Payment');
const getPayment = async (req, res) => {
  try {
    const paymentInfo = await Payment.find();
    console.log('Payment Info', paymentInfo);
    res.status(200).json(paymentInfo);
  } catch (error) {
    console.error('Error get payment:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getPayment;
