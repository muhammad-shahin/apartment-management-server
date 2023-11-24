const {
  getAllBookedApartments,
  addBookedApartments,
  updateBookedApartment,
} = require('../../api/v1/bookedApartment/controllers');

const router = require('express').Router();

router.get('/bookedApartments', getAllBookedApartments);
router.post('/bookedApartments', addBookedApartments);
router.put('/bookedApartments', updateBookedApartment);

module.exports = router;
