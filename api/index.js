"use strict";
require("./config/config");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

// CoreMidleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
const initRoutes = require("./routes/api-version");
initRoutes(app);

// Middleware Error
// any

app.listen(process.env.PORT, () => {
  console.log(`run server in: ${process.env.PORT}`);
});
