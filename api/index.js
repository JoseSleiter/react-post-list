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

// swaggerUi
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use(
  "/",
  function (req, res, next) {
    swaggerDocument.host = req.get("host");
    req.swaggerDoc = swaggerDocument;
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup()
);

app.listen(process.env.PORT, () => {
  console.log(`run server in: ${process.env.PORT}`);
});
