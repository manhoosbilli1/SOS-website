const express = require('express');
const app = express();
const mongoose = require('mongoose');
const gpsData = require('./models/info');
let lat, lng;
let location={lat: "", lng: ""};
app.set('view engine', 'ejs');

const uri = 'mongodb+srv://newadmin:newadmin@cluster0.6jwsa6v.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log("connected to db"))
.catch((err) => console.log(err)); 

function getData(){
  gpsData.findById('62fb6692426dff7dd53be0a6')
  .then((result) => {
    lat = result['lat']; 
    lng = result['lng']; 
    location['lat'] = lat; 
    location['lng'] = lng; 
    console.log(location);
    module.exports = location;
    // console.log('lat: ', lat);
    // console.log('lng: ', lng); 
  })
  .catch((err) =>{
    console.log(err);
  });
  return location; 
}

app.listen(3000);

app.get('/', (req,res) => {
location = getData(); 
module.exports = location;
res.render('map');

});

