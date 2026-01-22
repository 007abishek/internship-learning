const fs=require("fs");

fs.writeFile("sample.txt","Hello Node.js",(err) => {
    if(err) throw err;
    console.log("File written");
});

fs.readFile("sample.txt","utf8",(err,data) =>{
    if(err) throw err;
    console.log("file content:",data);
});


fs.appendFile("Sample.txt","\nAppended text",()=>{
    console.log("Text appended");
})