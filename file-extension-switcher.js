const fs = require('fs');

const sourceFileExtension = process.argv[2];
const destinationFileExtension = process.argv[3];

const inputPath = process.argv[4];
const outputPath = process.argv[5];

const rename = (oldFilename, newFilename) =>
  fs.rename(oldFilename, newFilename, err => {
    if (err) console.log(err);
  });

fs.readdir(inputPath, (err, files) => {
  files.forEach(filename => {
    if (filename.includes(sourceFileExtension)) {
      const newFilename = filename.replace(sourceFileExtension, destinationFileExtension);
      rename(`${inputPath}/${filename}`, `${outputPath}/${newFilename}`);
    }
  });
});
