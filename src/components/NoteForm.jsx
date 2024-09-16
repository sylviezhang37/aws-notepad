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

export default function NoteForm({ handleCreateNote, handleFileChange, fileName, signOut }) {
  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="row"
      width="80%"
      margin="0 auto"
    >
      <Image
        src={appLogo}
        alt="AppLogo"
        style={{ width: 150, marginBottom: "1rem" }}
      />
      <View as="form" margin="2rem" onSubmit={handleCreateNote}>
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
            required
          />
          <View
            as="textarea"
            name="description"
            placeholder="  ...  "
            rows={3}
            style={{
              width: '100%',
              resize: 'vertical',
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '5px'
            }}
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
            <Button variation="primary" style={{ width: "100%" }}>
              Existing Notes
            </Button>
          </Link>

          <Button onClick={signOut} style={{ flex: 1 }}>
            Sign Out
          </Button>
        </Flex>
      </View>
    </Flex>
  );
}