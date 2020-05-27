const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const terminalCommands = require('./terminal-commands');

readLine.question('Which command would you like to use? ', name => {
  if (name === 'ls') {
    terminalCommands.ls();
  } else if (name === 'mkdir') {
    readLine.question('What is the name of the new directory? ', dirName => {
      terminalCommands.mkdir(dirName);
    });
  } else if (name === 'touch') {
    readLine.question('What is the name of the new file? ', fileName => {
      terminalCommands.touch(fileName);
    });
  }
});
