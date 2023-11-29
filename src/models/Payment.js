const { model, Schema, Types } = require('mongoose');
// get current date & time and format it
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
const formattedTime = currentDate.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});
const PaymentSchema = new Schema(
  {
    apartmentInfo: {
      type: Object,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    otherPaymentInfo: {
      type: Object,
      required: true,
    },
    paymentOfMonth: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: String,
      required: false,
      default: formattedDate,
    },
    paymentTime: {
      type: String,
      required: false,
      default: formattedTime,
    },
  },
  {
    versionKey: false,
  }
);

const Payment = model('Payment', PaymentSchema, 'payments');
module.exports = Payment;
