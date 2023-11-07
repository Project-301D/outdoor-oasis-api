'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Park = require('./models/schema.js');

async function seed() {
  await Park.create({
    parkName: 'Great Smoky Mountains National Park',
    lat: 35.6761,
    lon: -83.7212,
    degF: 39,
    cityName: 'Cades Grove',
    stateName: 'TN',
    images:['https://cdn.elebase.io/f73a5e12-7a94-4da0-96b6-40fd97435fd2/3dd9239d-d00c-47e8-8900-6d073b44ccbe-ten8dec9e34413f3271b.jpg?rot=auto&q=75', 'https://friendsofthesmokies.org/wp-content/uploads/2016/06/611-Elk-Eco-Tour.jpg','https://cdn.crazyfamilyadventure.com/wp-content/uploads/2020/08/Smokys-Featured1-1024x512.jpg?strip=all&lossy=1&ssl=1']
  });
  console.log('Grand Teton was added');

  await Park.create({
    parkName: 'Yellowstone National Park',
    lat: 44.4280,
    lon: -110.5885,
    degF: 31,
    cityName: 'Yellowstone National Park',
    stateName: 'WY',
    images:['https://www.lodgeatbigsky.com/resourcefiles/attractionsmallimages/yellowstone-national-park-montana.jpg?version=10312023145558', 'https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647563984/singularity-migrated-images/yellowstone-national-park-bison-herd-madison-river-valley-yellowstone-facts-via-magazine-shutterstock_666046720.jpg.jpg', 'https://www.yellowstonevacations.com/wp-content/uploads/2023/08/Mask-Group-52.jpg.webp']
  });
  console.log('Yellowstone was added');

  await Park.create({
    parkName: 'Grand Teton',
    lat: 47.7904,
    lon: -110.6818,
    degF: 37,
    cityName: 'Grand Teton',
    stateName: 'WY',
    images: ['https://www.mountain-forecast.com/system/images/18627/large/Grand-Teton.jpg?1422134894', 'https://www.tripsavvy.com/thmb/fWtD6iYgT7swsbxMwfhXpkl-6Pw=/2700x1800/filters:no_upscale():max_bytes(150000):strip_icc()/DSCF9428-043df156e4af41ffbf56bfa1033a0035.jpg', 'https://www.thrifty.com/content/dam/thrifty/global/blog-articles/off-the-beaten-path/ultimate-guide-grand-teton-national-park/img-hero-GRANDTETONNP.jpg'
    ]
  });
  console.log('Grand Teton was added');

  mongoose.disconnect();
}

seed();

// parkName: {type: String, required: true},
// lat: {type: Number, required: true},
// lon: {type: Number, required: true},
// degF: {type: Number, required: true},
// cityName: {type: String, required: true},
// stateName: {type: String, required: true},
// images: {type: Array, required: true}
