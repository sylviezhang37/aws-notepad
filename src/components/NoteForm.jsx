import React, { useState } from "react";
import {
  Button,
  TextField,
  Text,
  Flex,
  View,
  Image,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import appLogo from '../assets/notepad.png';
import styles from '../styles'; 

export default function NoteForm({ handleCreateNote, handleFileChange, fileName, signOut }) {
  return (
    <Flex
      className="App"
      style={styles.newNoteContainer}
    >
      <Image
        src={appLogo}
        alt="AppLogo"
        style={styles.appLogo} 
      />
      <View as="form" margin="2rem" onSubmit={handleCreateNote}>
        <Flex
          style={styles.formContainer}
        >
          <TextField
            name="title"
            placeholder="Title"
            label="Title"
            labelHidden
            required
          />
          <View
            as="textarea"
            name="description"
            placeholder="  ...  "
            rows={3}
            style={styles.textArea} 
          />

          <View
            name="image"
            as="input"
            type="file"
            alignSelf={"end"}
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />

          {fileName && <Text>Selected file: {fileName}</Text>}

          <Button type="submit" variation="primary">
            Add Note
          </Button>

          <Link to="/current-notes">
            <Button variation="primary" style={styles.fullWidthButton}>
              Existing Notes
            </Button>
          </Link>

          <Button onClick={signOut} style={styles.signOutButton}>
            Sign Out
          </Button>
        </Flex>
      </View>
    </Flex>
  );
}