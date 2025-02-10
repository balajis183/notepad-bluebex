const express = require("express");
const { addNote, getAllNotes, deleteNote } = require("../controllers/noteControllers");

const router = express.Router();

// Route to add a new note
router.post("/notes", addNote);

// Route to get all notes
router.get("/notes", getAllNotes);

// Route to delete a note by ID
router.delete("/notes/:id", deleteNote);

module.exports = router;
