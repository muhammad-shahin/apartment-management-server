const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
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
});

const User = model('User', UserSchema, 'users');
module.exports = User;
