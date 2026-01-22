const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/file") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    fs.createReadStream("sample.txt").pipe(res);
  } else {
    res.end("Use /file route");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/file");
});
