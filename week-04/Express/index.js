const express = require("express");
const app = express();


// BUILT-IN MIDDLEWARE
// Parse JSON body
app.use(express.json());


//CUSTOM MIDDLEWARE

// Runs for every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next handler
});

//ROUTES


// GET route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

// POST route (handling request body)
app.post("/user", (req, res) => {
  const { name, role } = req.body;

  res.json({
    message: "User created",
    data: { name, role }
  });
});

// Route parameters 
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing subreddit: ${subreddit}</h1>`);
});

// Multiple route parameters
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing post ${postId} in subreddit ${subreddit}</h1>`
  );
});

// Query string handling
app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).send("Search query is required");
  }

  res.send(`<h1>Search results for: ${q}</h1>`);
});

// Another GET route
app.get("/product", (req, res) => {
  res.send("This is the product page");
});


 //  FALLBACK (404)
app.use((req, res) => {
  res.status(404).send("Route not found");
});


//   SERVER START

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
