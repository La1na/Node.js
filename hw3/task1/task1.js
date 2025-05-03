const fs = require('fs')

const path = require('path');

const dirPath = path.join(__dirname, 'myFolder');

fs.mkdir(dirPath, (err) => {
    if (err) {
      console.error('Error creating catalog:', err);
      return;
    }
    console.log('Catalog succesfully created');
  
    fs.rmdir(dirPath, (err) => {
      if (err) {
        console.error('Error deleting catalog:', err);
        return;
      }
      console.log('Catalog succesfully deleted');
    });
  });