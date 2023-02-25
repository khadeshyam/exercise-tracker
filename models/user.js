const mongoose = require('mongoose');
const exerciseSchema = require('./exercise');

console.log(Exercise);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
   count:{
     type: Number,
     default: 0,
  },
  logs:[exerciseSchema]
})

const User = new mongoose.model("User", userSchema);

module.exports = User;

