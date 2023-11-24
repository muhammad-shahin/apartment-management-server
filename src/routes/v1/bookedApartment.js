const {
  getAllBookedApartments,
  addBookedApartments,
} = require('../../api/v1/bookedApartment/controllers');

const router = require('express').Router();

router.get('/bookedApartments', getAllBookedApartments);
router.post('/bookedApartments', addBookedApartments);

module.exports = router;
