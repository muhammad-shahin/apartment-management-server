const {
  addNewPayment,
  getPaymentById,
} = require('../../api/v1/payment/controllers');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();

router.post('/payment', verifyToken, addNewPayment);
router.get('/payment/:userObjectId', verifyToken, getPaymentById);

module.exports = router;
