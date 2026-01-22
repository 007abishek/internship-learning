const fs = require("fs");

const readStream = fs.createReadStream("sample.txt", {
  encoding: "utf8",
});

readStream.on("data", (chunk) => {
  console.log("Received chunk:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File read completed");
});
