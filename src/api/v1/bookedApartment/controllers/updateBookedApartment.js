const BookedApartment = require('../../../../models/BookedApartment');
const User = require('../../../../models/User');

const updateBookedApartment = async (req, res) => {
  try {
    const { bookedApartmentId } = req.body;
    const existingBooking = await BookedApartment.findById(bookedApartmentId);

    if (!existingBooking) {
      return res
        .status(404)
        .send({ success: false, message: 'Booked apartment not found' });
    }
   // Update booking status and other info
   existingBooking.bookingStatus = 'selected';

   // Add new property acceptedDate with the current date
   existingBooking.acceptedDate = new Date().toLocaleDateString('en-US', {
     day: 'numeric',
     month: 'short',
     year: 'numeric',
   });

   // Update userRole to member if not admin
   const user = await User.findById(existingBooking.user);

   if (user && user.userRole !== 'admin') {
     user.userRole = 'member';
     await user.save();
   }

   // Save the updated booked apartment
   const updatedBookingStatus = await existingBooking.save();

   res
     .status(200)
     .send({ success: true, bookedApartment: updatedBookingStatus });
  } catch (error) {
    console.error('Error updating booked apartment:', error);
    res
      .status(500)
      .send({ success: false, message: 'Error updating booked apartment' });
  }
};

module.exports = updateBookedApartment;
