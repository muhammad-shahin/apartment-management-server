const { model, Schema, Types } = require('mongoose');

const PaymentSchema = new Schema(
  {
    apartmentInfo: {
      type: Object,
      required: true,
    },
    paymentOfMonth: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Payment = model('Payment', PaymentSchema, 'payments');
module.exports = Payment;
