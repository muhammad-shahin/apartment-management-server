const {
  getAllBookedApartments,
  addBookedApartments,
  updateBookedApartment,
  getBookedById,
  deleteBookedApartment,
} = require('../../api/v1/bookedApartment/controllers');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();

router.get('/booked-apartments', getAllBookedApartments);
router.post('/booked-apartments', addBookedApartments);
router.put('/booked-apartments', updateBookedApartment);
router.get('/booked-apartments/:userObjectId', verifyToken, getBookedById);
router.delete(
  '/booked-apartments/:objectId',
  verifyToken,
  deleteBookedApartment
);

module.exports = router;
