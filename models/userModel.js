const mongoose = require('mongoose');
const config = require('../config/db');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  brandMember: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
});

const User = mongoose.model('User', userSchema);



module.exports = User;

