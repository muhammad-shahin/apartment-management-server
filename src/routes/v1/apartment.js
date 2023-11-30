const {
  addNewApartment,
  getAllApartments,
} = require('../../api/v1/apartment/controllers');
const verifyToken = require('../../middlewares/verifyToken');
const router = require('express').Router();

router.post('/apartments', verifyToken, addNewApartment);
router.get('/apartments', getAllApartments);

module.exports = router;
