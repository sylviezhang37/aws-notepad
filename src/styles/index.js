const styles = {
  appLogo: {
    width: 150,
    marginBottom: "1rem",
  },
  textArea: {
    width: '100%',
    resize: 'vertical',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  fullWidthButton: {
    width: "100%",
  },
  signOutButton: {
    flex: 1,
  },
  newNoteContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    margin: "0 auto",
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem",
  },
  currentNotesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // set the flex direction to column instead of direction 
    flexDirection: 'column', 
    width: '70%',
    margin: '0 auto',
  },
  noteGrid: {
    margin: '3rem 0',
    autoFlow: 'column',
    justifyContent: 'center',
    gap: '2rem',
    alignContent: 'center',
  },
  noteBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    border: '1px solid #ccc',
    padding: '2rem',
    borderRadius: '5%',
  },
  noteImage: {
    width: 200,
  },
};

export default styles;