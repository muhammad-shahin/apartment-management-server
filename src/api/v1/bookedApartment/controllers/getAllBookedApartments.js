const BookedApartment = require('../../../../models/BookedApartment');
const Apartment = require('../../../../models/Apartment');

const getAllBookedApartments = async (req, res) => {
  try {
    const allApartments = await BookedApartment.find()
      .populate('user')
      .populate('apartment');
    const apartmentCount = await Apartment.estimatedDocumentCount();
    // Create a response object with the fetched data
    const response = {
      bookedApartments: allApartments,
      totalApartments: apartmentCount,
    };

    res.status(200).send(response);
  } catch (err) {
    console.log('Failed To Get All Booked Apartments:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get All Booked Apartments',
    });
  }
};

module.exports = getAllBookedApartments;
