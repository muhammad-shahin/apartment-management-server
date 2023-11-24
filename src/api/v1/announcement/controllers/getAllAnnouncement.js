const Announcement = require('../../../../models/Announcement');

const getAllAnnouncement = async (req, res) => {
  try {
    const allAnnouncement = await Announcement.find();

    console.log('All Announcement Data:', allAnnouncement);

    res.status(200).send(allAnnouncement);
  } catch (err) {
    console.log('Failed To Get All Announcement Data:', err);
    res.status(500).send({
      success: false,
      message: 'Failed To Get All Announcement Data',
    });
  }
};

module.exports = getAllAnnouncement;
