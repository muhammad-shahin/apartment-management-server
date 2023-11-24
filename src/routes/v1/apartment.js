const {
  addNewApartment,
  getAllApartments,
} = require('../../api/v1/apartment/controllers');

const router = require('express').Router();

router.post('/apartments', addNewApartment);
router.get('/apartments', getAllApartments);

module.exports = router;
