import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/NoteList.css"; // Import styles

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios
      .get("http://localhost:8080/api/notes")
      .then((response) => setNotes(response.data))
      .catch(() => setError("Failed to load notes. Please try again."));
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:8080/api/notes/${id}`)
      .then(() => setNotes(notes.filter((note) => note.id !== id)))
      .catch(() => setError("Failed to delete note. Please try again."));
  };

  return (
    <div className="note-list-container">
      <h2 className="title">Your Notes</h2>
      <h4 style={{fontStyle:"italic",color:"blue"}}>Kindly refresh the page after adding a note to view all the updated notelist</h4>
      {error && <p className="error">{error}</p>}
      {notes.length === 0 ? (
        <p className="no-notes">No notes available.</p>
      ) : (
        <div className="note-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-item">
              <p><strong>Title:</strong> {note.title}</p>
              <p><strong>Content:</strong> {note.content}</p>
              <p><strong>Category:</strong> {note.category}</p>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteList;
