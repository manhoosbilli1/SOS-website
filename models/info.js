const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const infoSchema = new Schema({
    lat: {type: String, required: true},
    lng: {type: String, required: true}
});

//now creating model from schema

const gpsData = mongoose.model('gpsData', infoSchema);
module.exports = gpsData;