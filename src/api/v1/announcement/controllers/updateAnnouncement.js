const Announcement = require('../../../../models/Announcement');

const updateAnnouncement = async (req, res) => {
  try {
    const updatedAnnouncement = req.body;
    const { announcementTitle, announcementDescription } = updatedAnnouncement;

    const result = await Announcement.updateOne(
      { announcementTitle },
      { $set: { announcementDescription } },
      { upsert: true }
    );

    console.log('Update Result:', result);

    res
      .status(200)
      .send({ success: true, message: 'Announcement updated successfully' });
  } catch (err) {
    console.log('Failed to update announcement:', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed to update announcement' });
  }
};

module.exports = updateAnnouncement;
