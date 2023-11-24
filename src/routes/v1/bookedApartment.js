const {
  getAllBookedApartments,
  addBookedApartments,
  updateBookedApartment,
  getBookedById,
} = require('../../api/v1/bookedApartment/controllers');

const router = require('express').Router();

router.get('/bookedApartments', getAllBookedApartments);
router.post('/bookedApartments', addBookedApartments);
router.put('/bookedApartments', updateBookedApartment);
router.get('/bookedApartments/:userObjectId', getBookedById);

module.exports = router;
