const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => `${acc} ${file}`, '');

    console.log(filesToString);
    process.exit(0);
  });
};

module.exports.touch = touchName => {
  // code to implement touch terminal command here
  fs.writeFile(`${touchName}`, '', err => {
    if (err) throw err;
    console.log('New file successfully created.');
    process.exit(0);
  });
};

module.exports.mkdir = dirName => {
  // code to implement mkdir terminal command here
  fs.mkdir(`./${dirName}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('New directory successfully created.');
      process.exit(0);
    }
  });
};
