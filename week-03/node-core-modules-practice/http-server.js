const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home page");
    }else if(req.url==="/about"){
        res.end("About page");
    }else{
        res.writeHead(404);
        res.end("Page Not Found");
    }
});

server.listen(3000,() =>{
      console.log("Server on http://localhost:3000");

});

