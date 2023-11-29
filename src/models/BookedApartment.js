const { model, Schema } = require('mongoose');

const BookedApartmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    apartment: {
      type: Schema.Types.ObjectId,
      ref: 'Apartment',
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
      default: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    },
    acceptedDate: {
      type: String,
      required: true,
      default: 'Pending',
    },
    bookingStatus: {
      type: String,
      required: true,
      default: 'Pending',
    },
  },
  {
    versionKey: false,
  }
);

const BookedApartment = model(
  'BookedApartment',
  BookedApartmentSchema,
  'bookedApartments'
);
module.exports = BookedApartment;
