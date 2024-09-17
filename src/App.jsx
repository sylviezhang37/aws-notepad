import React, { useState, useEffect } from "react";
import {
  Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchNotes, createNote, deleteNote } from "./services/notesService";
import CurrentNotes from "./components/CurrentNotes";
import NoteForm from "./components/NoteForm"; 

export default function App() {
  const [notes, setNotes] = useState([]);
  const [fileName, setFileName] = useState(""); 

  useEffect(() => {
    fetchAndSetNotes();
  }, []);

  async function fetchAndSetNotes() {
    const notesData = await fetchNotes();
    setNotes(notesData);
  }

  async function handleCreateNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    await createNote(form);
    fetchAndSetNotes();
    event.target.reset();
    deleteFile();
  }

  async function handleDeleteNote(id) {
    await deleteNote(id);
    fetchAndSetNotes();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  }

  function deleteFile() {
      setFileName("");
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <NoteForm
                  handleCreateNote={handleCreateNote}
                  handleFileChange={handleFileChange}
                  fileName={fileName}
                  signOut={signOut}
                />
              }
            />
            <Route
              path="/current-notes"
              element={
                <CurrentNotes 
                  notes={notes} 
                  handleDeleteNote={handleDeleteNote} 
                />
              }
            />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}