const BookedApartment = require('../../../../models/BookedApartment');

const getBookedById = async (req, res) => {
  try {
    const userObjectId = req.params.userObjectId;
    const filter = { user: userObjectId };
    const Apartments = await BookedApartment.find(filter)
      .populate('user')
      .populate('apartment');
    console.log(' Booked Apartments Data By User Object Id:', Apartments);
    res.status(200).send(Apartments);
  } catch (err) {
    console.log('Failed To Get Booked Apartments By User Object Id:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get Booked Apartments By User Object Id',
    });
  }
};

module.exports = getBookedById;
