const { model, Schema } = require('mongoose');

const ApartmentSchema = new Schema(
  {
    apartmentImage: {
      type: Array,
      required: true,
    },
    floorNo: {
      type: String,
      required: true,
    },
    blockName: {
      type: String,
      required: true,
    },
    apartmentNo: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: false,
    },
    totalBedroom: {
      type: Number,
      required: false,
    },
    totalBathroom: {
      type: Number,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    apartmentName: {
      type: String,
      required: false,
    },
    details: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Apartment = model('Apartment', ApartmentSchema, 'apartments');
module.exports = Apartment;
