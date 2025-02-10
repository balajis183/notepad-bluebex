import React, { useState } from "react";
import axios from "axios";
import "../styles/NoteForm.css";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!title || content.length < 10) {
      setError("Title is required and content must be at least 10 characters!");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    const newNote = { title, content, category };

    // POST request using axios
    axios
      .post("http://localhost:8080/api/notes", newNote)
      .then((response) => {
        console.log("Note added:", response.data);
        setMessage("Note added successfully!");
        setError("");

        // Clear form fields after submission
        setTitle("");
        setContent("");
        setCategory("");

        // Clear success message after a short time
        setTimeout(() => setMessage(""), 3000);
      })
      .catch((err) => {
        console.error("Error adding note:", err);
        setError("Failed to add note. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h1 style={{fontSize:"25px", color:"blue"}}>Simple Note Manager</h1>
      <h3>Add a New Note</h3>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content (min 10 chars)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
