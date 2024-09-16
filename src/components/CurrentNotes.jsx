import React from "react";
import { Heading, Grid, Flex, Text, Image, Button } from "@aws-amplify/ui-react";

export default function CurrentNotes({ notes, handleDeleteNote }) {
  return (
    <Flex
      className="CurrentNotes"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={3}>Notes</Heading>
      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {notes.map((note) => (
          <Flex
            key={note.id || note.title}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <Heading level={3}>{note.title}</Heading>
            <Text fontStyle="italic">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${note.title}`}
                style={{ width: 200 }}
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