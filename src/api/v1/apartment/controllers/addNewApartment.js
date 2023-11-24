const Apartment = require('../../../../models/Apartment');
const addNewApartment = async (req, res) => {
  try {
    const apartment = req.body;
    const newApartment = new Apartment(apartment);
    const savedApartment = await newApartment.save();
    console.log('Saved Apartment : ', savedApartment);
    res.status(201).send(savedApartment);
  } catch (err) {
    console.log('Failed To Add New Apartment : ', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed To Add New Apartment' });
  }
};

module.exports = addNewApartment;
