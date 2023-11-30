const { model, Schema } = require('mongoose');
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
    },
    userCreated: {
      type: String,
      required: false,
      default: formattedDate,
    },
  },
  {
    versionKey: false,
  }
);

const User = model('User', UserSchema, 'users');
module.exports = User;
