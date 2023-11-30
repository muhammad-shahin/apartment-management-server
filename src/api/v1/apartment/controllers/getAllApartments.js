const Apartment = require('../../../../models/Apartment');
const getAllApartments = async (req, res) => {
  try {
    const page = req.query.page;
    const count = req.query.count;
    if (count == 'true') {
      const allApartmentCount = await Apartment.estimatedDocumentCount();
      return res
        .status(200)
        .send({ success: true, totalCount: allApartmentCount });
    }
    const pageNumber = parseInt(page);
    const itemPerPage = 6;
    const skip = pageNumber * itemPerPage;
    const totalApartmentsCount = await Apartment.estimatedDocumentCount();
    console.log('total Apartments Count :', totalApartmentsCount);
    const allApartment = await Apartment.find().skip(skip).limit(itemPerPage);
    console.log('All Apartments Data Retrieve Successfully ');
    res.status(200).send({ allApartment, totalApartmentsCount });
  } catch (err) {
    console.log('Failed To Get All Apartments : ', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed To Get All Apartments' });
  }
};

module.exports = getAllApartments;
