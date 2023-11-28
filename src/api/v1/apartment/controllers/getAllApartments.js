const Apartment = require('../../../../models/Apartment');
const getAllApartments = async (req, res) => {
  try {
    const page = req.query.page;
    const pageNumber = parseInt(page);
    const itemPerPage = 6;
    const skip = pageNumber * itemPerPage;
    const allApartment = await Apartment.find().skip(skip).limit(itemPerPage);
    console.log('All Apartments Data Retrieve Successfully ');
    res.status(200).send(allApartment);
  } catch (err) {
    console.log('Failed To Get All Apartments : ', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed To Get All Apartments' });
  }
};

module.exports = getAllApartments;
