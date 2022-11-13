const express = require("express");
const swaggerUi = require('swagger-ui-express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
//const expressValidator = require('express-validator')

//const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "LogRocket Express API with Swagger",
//       version: "0.1.0",
//       description:
//         "This is a simple CRUD API application made with Express and documented with Swagger",
//       license: {
//         name: "MIT",
//         url: "https://spdx.org/licenses/MIT.html",
//       },
//       contact: {
//         name: "LogRocket",
//         url: "https://logrocket.com",
//         email: "info@email.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:8080/api",
//       },
//     ],
//   },
//   apis: ["./routes/category.routers"],
// };
//app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// custom middleware logger
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//const specs = swaggerJsdoc(options);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true })
// );

app.get("/", (req, res) => {
  res.json({ message: "Welcome to shopli application." });
});


//require("./routes/programming.routers")(app);
require("./routes/category.routers")(app);
require("./routes/zoom.routers")(app);





// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});