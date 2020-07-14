const express = require("express");
const router = express.Router();
const fs = require("fs");

let apiData = require("../db/db.json");

// API GET Request

router.get("/api/notes", function (req, res) {
    res.json(apiData);
});


// API POST Requests

router.post("/api/notes", function (req, res) {
    res.json(req.body)
    fs.writeFileSync(apiData, apiData.push(req.body))
        .then(response => res.json(response))
        .catch(err => console.log(err))
});

module.exports = router;