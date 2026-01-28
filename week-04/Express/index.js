const express = require("express");
const app = express();


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.post("/user", (req, res) => {
  res.send("post request to user!!!");
});


app.get("/r/:subreddit",(req,res) => {
    const {subreddit}=req.params;
    res.send(`<h1>Browsing  the ${subreddit} </h1>`)
})
//express path parameters

app.get("/r/:subreddit/:postId",(req,res) => {
    const {subreddit,postId}=req.params;
    res.send(`<h1>view with post and  ${postId} Browsing  the ${subreddit} </h1>`)
})


app.get("/user", (req, res) => {
  res.send("it is user page");
});


app.get("/product", (req, res) => {
  res.send("it is product page");
});

//working with query string
app.get('/search',(req,res) =>{
    console.log(req.query);
    const {q}=req.query;
    if(!q){
        res.send("not there for other value")
    }
    res.send(`<h1> search results for ${q} </h1>`)
})
// fallback
app.use((req, res) => {
  res.status(404).send("Route not found");
});


app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
