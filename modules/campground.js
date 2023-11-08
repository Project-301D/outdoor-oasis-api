'use strict';

console.log('Campground js file connected');

let axios = require('axios');

//need parkCode and description?
async function getCampGround(parkCode, description, name) {
  console.log(`Search made: ${name}`);
  // console.log('in the get campground', name);
  let url = `https://developer.nps.gov/api/v1/campgrounds/?api_key=${process.env.CAMP_API_KEY}&q=${name}`;
  let result = await axios.get(url)
    //where is apiResponse variable coming from?
    .then(apiResponse => parseCampGround(apiResponse.data.data));
  console.log('result');
  return result;
}

function parseCampGround(campData) {
  try {
    console.log(campData[0].contacts.phoneNumbers);
    const campSummaries = campData[0].contacts.phoneNumbers.map(campground => {
      return new Campground(campground);
    });
    return Promise.resolve(campSummaries);
  } catch (error) {
    return Promise.reject(error);
  }
}

class Campground {
  constructor(data) {
    this.phoneNumber = data.phoneNumber;
    this.type = data.type;
  }
}

module.exports = getCampGround;
