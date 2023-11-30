const BookedApartment = require('../../../../models/BookedApartment');
const addBookedApartments = async (req, res) => {
  try {
    const booking = req.body;
    const newBooking = new BookedApartment(booking);
    const savedBooking = await newBooking.save();
    res.status(201).send({
      success: true,
      insertedId: savedBooking._id,
    });
  } catch (err) {
    console.log('Failed To Saved New Apartment Booking : ', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Saved New Apartment Booking',
    });
  }
};

module.exports = addBookedApartments;
