const {
  addNewApartment,
  getAllApartments,
  updateApartmentStatus,
} = require('../../api/v1/apartment/controllers');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();

router.post('/apartments', verifyToken, addNewApartment);
router.get('/apartments', getAllApartments);
router.put('/apartments', updateApartmentStatus);

module.exports = router;
