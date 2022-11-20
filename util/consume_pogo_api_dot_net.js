const fs = require('fs');

const urlHostName = 'https://pogoapi.net';

const apiHashesUrlPath = '/api/v1/api_hashes.json';

ApiHash = (api_filename, full_path) => {
  this.api_filename = api_filename;
  this.full_path = full_path;
}

console.log("Fetching endpoints")
fetch(`${urlHostName}${apiHashesUrlPath}`)
  .then(response => response.json())
  // .then(console.log)
  .then((response) => {
    for (const [key, value] of Object.entries(response)) {
      console.log(`${key}: ${value}`);
      consumeApi(value.full_path, value.api_filename)
    }
  });

let consumeApi = (urlPath, fileName) => {
  console.log(`Fetching the ${urlPath} and saving it to ${fileName}`)
  fetch(`${urlHostName}${urlPath}`)
    .then(response => response.json())
    // .then(console.log)
    .then(json => {
      fs.writeFile(`../src/assets/pogoapi/${fileName}`, JSON.stringify(json), err => {
        if (err) {
          console.error(err);
        }
        console.log(`file written successfully`)
      });
    });
}
