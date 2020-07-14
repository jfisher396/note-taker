const express = require("express");
// Tells node that we are creating an "express" server
const app = express();
const path = require("path");
// Sets an initial port.
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const htmlRoutes = require("./routes/apiRoutes.js");
app.use(htmlRoutes);
const apiRoutes = require("./routes/htmlRoutes.js");
app.use(apiRoutes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
