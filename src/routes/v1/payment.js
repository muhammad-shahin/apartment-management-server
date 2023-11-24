const {
  addNewPayment,
  getPaymentById,
} = require('../../api/v1/payment/controllers');

const router = require('express').Router();

router.post('/payment', addNewPayment);
router.get('/payment/:userObjectId', getPaymentById);

module.exports = router;
