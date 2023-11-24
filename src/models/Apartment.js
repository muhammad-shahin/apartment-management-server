const { model, Schema } = require('mongoose');

const ApartmentSchema = new Schema({
  apartmentImage: {
    type: String,
    required: true,
  },
  apartmentFloorNo: {
    type: String,
    required: true,
  },
  apartmentBlockName: {
    type: String,
    required: true,
  },
  apartmentNo: {
    type: String,
    required: true,
  },
  apartmentRent: {
    type: Number,
    required: true,
  },
});

const Apartment = model('Apartment', ApartmentSchema, 'apartments');
module.exports = Apartment;
