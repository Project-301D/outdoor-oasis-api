
'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

let parkSchema = new Schema({
  //check variable names, may change
  //all need to be required?
  parkName: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  degF: { type: Number, required: true },
  cityName: { type: String, required: true },
  stateName: { type: String, required: true },
  images: { type: Array, required: true }
});

const Park = mongoose.model('Park', parkSchema);
module.exports = Park;
