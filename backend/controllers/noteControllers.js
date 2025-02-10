const notes = require("../models/notesDB"); // Import in-memory storage
const Note = require("../models/noteSchema"); // Import Note model

// Add a new note
const addNote = (req, res) => {
  try {
    const { title, content, category } = req.body;
    const id = notes.length + 1; // Simple ID generation

    const newNote = new Note(id, title, content, category);
    notes.push(newNote); // Save to in-memory array

    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all notes
const getAllNotes = (req, res) => {
  res.json(notes);
};

// Delete a note by ID
const deleteNote = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((note) => note.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes.splice(index, 1); // Remove note from array
  res.json({ message: "Note deleted successfully" });
};

module.exports = { addNote, getAllNotes, deleteNote };
