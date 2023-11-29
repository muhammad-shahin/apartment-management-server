const {
  getAllBookedApartments,
  addBookedApartments,
  updateBookedApartment,
  getBookedById,
} = require('../../api/v1/bookedApartment/controllers');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();

router.get('/bookedApartments', getAllBookedApartments);
router.post('/booked-apartments', addBookedApartments);
router.put('/bookedApartments', updateBookedApartment);
router.get('/booked-apartments/:userObjectId', verifyToken, getBookedById);

module.exports = router;
