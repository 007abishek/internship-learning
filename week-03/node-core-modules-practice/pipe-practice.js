const fs = require("fs");

const source = fs.createReadStream("sample.txt");
const destination = fs.createWriteStream("copy.txt");

source.pipe(destination);

console.log("File copied using streams");
