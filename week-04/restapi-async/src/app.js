const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(logger);

// 🔥 THIS LINE IS CRITICAL
app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;
