const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {

    const data = JSON.parse(body);
    const foundBreed = data[0];

    if (!foundBreed) {
      callback(`Sorry, the entered breed: ${breedName} could not be found. Please try again.`);
    } else {
      callback(null, foundBreed.description);
    }
  }
  );
};

module.exports = { fetchBreedDescription };