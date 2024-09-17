import React from "react";
import { Heading, Grid, Flex, Text, Image, Button } from "@aws-amplify/ui-react";
import styles from '../styles'; 

export default function CurrentNotes({ notes, handleDeleteNote }) {
  return (
    <Flex
      className="CurrentNotes"
      style={styles.currentNotesContainer}
    >
      <Heading level={3}>Notes</Heading>
      <Grid style={styles.noteGrid}>
        {notes.map((note) => (
          <Flex
            key={note.id || note.title}
            style={styles.noteBox} 
            className="box"
          >
            <Heading level={3}>{note.title}</Heading>
            <Text fontStyle="italic">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${note.title}`}
                style={styles.noteImage}
              />
            )}
            <Button
              variation="destructive"
              onClick={() => handleDeleteNote(note.id)}
            >
              Delete note
            </Button>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}