const fs = require('fs');
const util = require('util');


  const readsFile = util.promisify(fs.readFile);

  const writesToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 2), (e) =>
  e ? console.error(e): console.info(`Note was sent to ${destination}`)
  );

  module.exports = {writesToFile, readsFile}