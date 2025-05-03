const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();


const filename = process.env.FILENAME;

if (!filename) {
  console.error('Error: Environment variable FILENAME is not defined in the .env file');
  process.exit(1);
}

const filePath = path.join(__dirname, filename);
const textToWrite = 'This is the text that will be written to the file.';

fs.writeFile(filePath, textToWrite, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log(`File "${filename}" successfully created and text written to it.`);


  fs.readFile(filePath, 'utf-8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
      return;
    }
    console.log('File contents:');
    console.log(data);
  });
});