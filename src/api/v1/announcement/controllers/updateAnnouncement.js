const Announcement = require('../../../../models/Announcement');

const updateAnnouncement = async (req, res) => {
  try {
    const updatedAnnouncement = req.body;
    const { announcementTitle, announcementDescription } = updatedAnnouncement;

    const announcement = await Announcement.updateOne(
      { announcementTitle },
      { $set: { announcementDescription } },
      { upsert: true }
    );

    console.log('Update announcement:', announcement);

    res.status(201).send({ success: true, data: announcement });
  } catch (err) {
    console.log('Failed to update announcement:', err);
    res
      .status(500)
      .send({ success: false, message: 'Failed to update announcement' });
  }
};

module.exports = updateAnnouncement;
