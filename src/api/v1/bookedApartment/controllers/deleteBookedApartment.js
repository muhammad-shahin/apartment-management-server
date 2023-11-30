const BookedApartment = require('../../../../models/BookedApartment');

const deleteBookedApartment = async (req, res) => {
  try {
    const bookedApartmentObjectId = req.params.objectId;

    const filter = { _id: bookedApartmentObjectId };

    const deletedApartment = await BookedApartment.deleteOne(filter);

    console.log('Deleted Booked Apartment:', deletedApartment);

    res.status(200).send(deletedApartment);
  } catch (err) {
    console.log('Failed To Delete Booked Apartment:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Delete Booked Apartment',
    });
  }
};

module.exports = deleteBookedApartment;
