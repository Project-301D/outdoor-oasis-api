'use strict';

console.log('Campground js file connected');

let axios = require('axios');

async function getCampGround(parkCode, description, name) {
  console.log(`Search made: ${name}`);
  //where it's parks in the url it was campgrounds
  let url = `https://developer.nps.gov/api/v1/parks/?api_key=${process.env.CAMP_API_KEY}&q=${name}`;
  let result = await axios.get(url)
    .then(apiResponse => parseCampGround2(apiResponse.data.data));
  console.log('result: ', result);
  return result;
}

// function parseCampGround(campData) {
//   try {
//     console.log(campData[0].contacts.phoneNumbers);
//     const campSummaries = campData[0].contacts.phoneNumbers.map(campground => {
//       return new Campground(campground);
//     });
//     return Promise.resolve(campSummaries);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

function parseCampGround2(campData) {
  try {
    campData.sort((a,b) => b.relevanceScore - a.relevanceScore);
    let mostRelevantCamp = campData[0];
    let relevantArray = [];
    relevantArray.push(
      {latitude: mostRelevantCamp.latitude,
        longitude: mostRelevantCamp.longitude,
        fullName: mostRelevantCamp.fullName,
        images: mostRelevantCamp.images
      });
    console.log(relevantArray);
    const campSummaries = relevantArray.map(campground => {
      return new Campground2(campground);
    });
    return Promise.resolve(campSummaries);
  } catch (error) {
    return Promise.reject(error);
  }
}

// class Campground {
//   constructor(data) {
//     this.phoneNumber = data.phoneNumber;
//     this.type = data.type;
//   }
// }

class Campground2 {
  constructor(data) {
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.fullName = data.fullName;
    this.images = data.images;
  }
}

module.exports = getCampGround;
