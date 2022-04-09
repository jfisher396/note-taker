const express = require("express");
const router = express.Router();

const add = require("../db/add");

// API GET Request

router.get("/api/notes", function (req, res) {
  
  add
    .readAll()
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

// API POST Requests

router.post("/api/notes", function (req, res) {
  add
    .addNew(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

router.delete("/api/notes/:id", function (req, res) {
  add
    .deleteNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

module.exports = router;
