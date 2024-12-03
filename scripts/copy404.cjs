const fs = require('fs');
const path = require('path');

const source = path.join(process.cwd(), 'dist/index.html');
const destination = path.join(process.cwd(), 'dist/404.html');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('Error copying 404.html:', err);
    process.exit(1);
  }
  console.log('404.html created successfully!');
});
