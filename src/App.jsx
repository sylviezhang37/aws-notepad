import React, { useState, useEffect } from "react";
import {
  Authenticator,
  Button,
  TextField,
  Flex,
  View,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchNotes, createNote } from "./services/notesService";
import appLogo from './assets/notepad.png'; 
import CurrentNotes from "./pages/CurrentNotes";  

export default function App() {
  const [notes, setNotes] = useState([]);

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
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Flex
                  className="App"
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
                  width="70%"
                  margin="0 auto"
                >
                  <Image
                    src={appLogo}
                    alt="AppLogo"
                    style={{ width: 150, marginBottom: "1rem" }}
                  />
                  <View as="form" margin="3rem 0" onSubmit={handleCreateNote}>
                    <Flex
                      direction="column"
                      justifyContent="center"
                      gap="2rem"
                      padding="1rem"
                    >
                      <TextField
                        name="title"
                        placeholder="Title"
                        label="Title"
                        labelHidden
                        variation="quiet"
                        required
                      />
                      <TextField
                        name="description"
                        placeholder="Description"
                        label="Description"
                        labelHidden
                        variation="quiet"
                        required
                      />
                      <View
                        name="image"
                        as="input"
                        type="file"
                        alignSelf={"end"}
                        accept="image/png, image/jpeg"
                      />

                      <Button type="submit" variation="primary">
                        Add Note
                      </Button>

                    </Flex>

                    <Flex
                      direction="row"
                      padding="1rem"
                      gap="2rem"
                    >

                      <Link to="/current-notes">
                        <Button variation='primary'>
                          Existing Notes
                        </Button>
                      </Link>

                      <Button onClick={signOut}>
                        Sign Out
                      </Button>

                    </Flex>
                    
                  </View>

                </Flex>
              }
            />
            <Route path="/current-notes" element={<CurrentNotes notes={notes} handleDeleteNote={fetchAndSetNotes} />} />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}