const { model, Schema } = require('mongoose');

const PaymentSchema = new Schema({
  paymentName: {
    type: String,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
});

const Payment = model('Payment', PaymentSchema, 'payment');
module.exports = Payment;
