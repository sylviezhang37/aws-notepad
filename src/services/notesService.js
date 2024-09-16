import { Amplify } from "aws-amplify";
import { getUrl, uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export async function fetchNotes() {
  const { data: notes } = await client.models.Note.list();
  return await Promise.all(
    notes.map(async (note) => {
      if (note.image) {
        const linkToStorageFile = await getUrl({
          path: ({ identityId }) => `media/${identityId}/${note.image}`,
        });
        note.image = linkToStorageFile.url;
      }
      return note;
    })
  );
}

export async function createNote(form) {
  const { data: newNote } = await client.models.Note.create({
    title: form.get("title"),
    description: form.get("description"),
    image: form.get("image").name,
  });

  if (newNote.image) {
    await uploadData({
      path: ({ identityId }) => `media/${identityId}/${newNote.image}`,
      data: form.get("image"),
    }).result;
  }

  return newNote;
}

export async function deleteNote(id) {
  const toBeDeletedNote = {
    id: id,
  };

  const { data: deletedNote } = await client.models.Note.delete(toBeDeletedNote);
  return deletedNote;
}