const gtePayment = require('../../../api/v1/payment');

const router = require('express').Router();

router.get('/payment', gtePayment);

module.exports = router;
