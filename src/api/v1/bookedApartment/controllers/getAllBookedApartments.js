const BookedApartment = require('../../../../models/BookedApartment');

const getAllBookedApartments = async (req, res) => {
  try {
    const allApartments = await BookedApartment.find().populate('apartment');
    console.log('All Booked Apartments Data:', allApartments);
    res.status(200).send(allApartments);
  } catch (err) {
    console.log('Failed To Get All Booked Apartments:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get All Booked Apartments',
    });
  }
};

module.exports = getAllBookedApartments;
