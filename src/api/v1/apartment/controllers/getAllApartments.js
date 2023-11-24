const Apartment = require('../../../../models/Apartment');
const getAllApartments = async (req, res) => {
  try {
    const allApartment = await Apartment.find();
    console.log('All Apartments Data : ', allApartment);
    res.status(200).send(allApartment);
  } catch (err) {
    console.log('Failed To Get All Apartments : ', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed To Get All Apartments' });
  }
};

module.exports = getAllApartments;
