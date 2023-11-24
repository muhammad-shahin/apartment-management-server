const BookedApartment = require('../../models/BookedApartment');

const getBookedByObjectId = async (bookedApartmentObjectId) => {
  const getBookedApartmentByObjectId = await BookedApartment.findOne({
    _id: bookedApartmentObjectId,
  })
    .populate('user')
    .populate('apartment');
  return getBookedApartmentByObjectId;
};

module.exports = getBookedByObjectId;
