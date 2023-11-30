const {
  getAllBookedApartments,
  addBookedApartments,
  updateBookedApartment,
  getBookedById,
  deleteBookedApartment,
} = require('../../api/v1/bookedApartment/controllers');
const verifyToken = require('../../middlewares/verifyToken');

const router = require('express').Router();

router.get('/booked-apartments', verifyToken, getAllBookedApartments);
router.post('/booked-apartments', verifyToken, addBookedApartments);
router.put('/booked-apartments', verifyToken, updateBookedApartment);
router.get('/booked-apartments/:userObjectId', verifyToken, getBookedById);
router.delete(
  '/booked-apartments/:objectId',
  verifyToken,
  deleteBookedApartment
);

module.exports = router;
