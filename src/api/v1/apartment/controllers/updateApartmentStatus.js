const Apartment = require('../../../../models/Apartment');

const updateApartmentStatus = async (req, res) => {
  try {
    const updateInfo = req.body;
    const { apartmentObjectId, updatedStatus } = updateInfo;
    const updated = await Apartment.findOneAndUpdate(
      { _id: apartmentObjectId },
      { $set: { bookingStatus: updatedStatus } },
      { new: true }
    );

    if (!updated) {
      res.status(404).send({ success: false, message: 'Apartment not found' });
    }

    res.status(200).send({ success: true, user: updated });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({ success: false, message: 'Error updating user' });
  }
};

module.exports = updateApartmentStatus;
