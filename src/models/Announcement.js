const { model, Schema } = require('mongoose');

// get current date & time and format it
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
const formattedTime = currentDate.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});
const AnnouncementSchema = new Schema(
  {
    announcementTitle: {
      type: String,
      required: true,
    },
    announcementDescription: {
      type: String,
      required: true,
    },
    announcementDate: {
      type: String,
      default: formattedDate,
      required: false,
    },
    announcementTime: {
      type: String,
      default: formattedTime,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Announcement = model('Announcement', AnnouncementSchema, 'announcement');
module.exports = Announcement;
