const { model, Schema, Types } = require('mongoose');

const PaymentIntentSchema = new Schema(
  {
    price: {
        type: Number,
        required: true,
      },
      clientSecret: {
        type: String,
        required: true,
      },
  },
  {
    versionKey: false,
  }
);

const PaymentIntent = model('PaymentIntent', PaymentIntentSchema, 'create-payment-intent');
module.exports = PaymentIntent;
