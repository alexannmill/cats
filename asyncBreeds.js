const fs = require('fs');

const breedDetailsFromFile = function(breed, runWhendone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) runWhendone(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

breedDetailsFromFile('bombay', printOutCatBreed);