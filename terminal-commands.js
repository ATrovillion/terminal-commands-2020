const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => `${acc} ${file}`, '');

    console.log(filesToString);
  });
};

module.exports.touch = name => {
  // code to implement touch terminal command here
  fs.writeFile(`${name}`);
};

module.exports.mkdir = () => {
  // code to implement mkdir terminal command here
  console.log('mkdir called');
};
