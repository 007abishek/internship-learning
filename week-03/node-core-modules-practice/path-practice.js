const path = require("path");

console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));

const filePath = path.join(__dirname, "files", "data.txt");
console.log("Joined path:", filePath);

console.log("Extension:", path.extname(filePath));
