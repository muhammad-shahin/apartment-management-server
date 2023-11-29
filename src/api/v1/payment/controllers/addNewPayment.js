const Payment = require('../../../../models/Payment');
const getBookedByObjectId = require('../../../../lib/bookedApartment/getBookedByObjectId');

const addNewPayment = async (req, res) => {
  try {
    const paymentInfo = req.body;
    const newPayment = new Payment(paymentInfo);
    const savedPayment = await newPayment.save();
    console.log('New Payment Saved : ', savedPayment);
    res.status(201).send({ success: true, insertedId: savedPayment._id });
  } catch (err) {
    console.log('Failed To Save New Payment : ', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Save New Payment',
    });
  }
};

module.exports = addNewPayment;
