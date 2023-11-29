const {
  createPaymentIntent,
} = require('../../api/v1/paymentIntent/controllers');

const router = require('express').Router();

router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
