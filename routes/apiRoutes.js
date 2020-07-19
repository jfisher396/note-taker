const express = require("express");
const router = express.Router();
const fs = require("fs");

const add = require("../db/add")
let apiData = require("../db/db.json");

// API GET Request

router.get("/api/notes", function (req, res) {
    // res.json(apiData);
    add.readAll().then(notes=>res.json(notes)).catch(err=>console.log(err))
    
});


// API POST Requests

router.post("/api/notes", function (req, res) {
    add.addNew(req.body).then(notes => res.json(notes)).catch(err => console.log(err))
    // res.json(req.body)
    // fs.writeFileSync(apiData, apiData.push(req.body))
    //     .then(response => res.json(response))
    //     .catch(err => console.log(err))
});

router.delete("/api/notes/:id", function (req, res) {
    add.deleteNote(req.params.id).then(notes => res.json(notes)).catch(err => console.log(err))
    
});

module.exports = router;