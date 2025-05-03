const fs = require('fs');

fs.writeFile('info.txt', 'Node.js is awesome!', 'utf-8', (err) => {
  if (err) {
    console.error('Error writing in info.txt:', err);
    return;
  }
  console.log('File info.txt succesfully created and written');

  fs.readFile('info.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading info.txt:', err);
      return;
    }
    console.log('File succesfully read info.txt:', data);
  });
});
