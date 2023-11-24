const { model, Schema } = require('mongoose');

const BookedApartmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bookingStatus: {
    type: String,
    required: true,
    default: 'Pending',
  },
  apartment: {
    type: Schema.Types.ObjectId,
    ref: 'Apartment',
    required: true,
  },
});

const BookedApartment = model(
  'BookedApartment',
  BookedApartmentSchema,
  'bookedApartments'
);
module.exports = BookedApartment;
