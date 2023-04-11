import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

import Note from "../components/Note";
import Header from "../components/Header";
import NotesJuge from "../components/NotesJuge";

function CompetitionPage() {
  const Master = true;
  const [notes, setNotes] = useState([
    { note: 0 },
    { note: 0 },
    { note: 10 },
    { note: 9 },
  ]);
  const [juges, setJuges] = useState([
    {
      note1: { note: 0, valide: false },
      note2: { note: 0, valide: false },
      note3: { note: 0, valide: false },
    },
    {
      note1: { note: 0, valide: false },
      note2: { note: 0, valide: false },
      note3: { note: 0, valide: false },
    },
    {
      note1: { note: 0, valide: false },
      note2: { note: 0, valide: false },
      note3: { note: 0, valide: false },
    },
  ]);
  

  const handleNoteChange = (event) => {
    const noteIndex = parseInt(event.target.name);
    const updatedNotes = notes.map((note, index) =>
      index === noteIndex ? { ...note, note: event.target.value } : note
    );
    setNotes(updatedNotes);
  };

  const handleJugeNoteChange = (jugeIndex, noteKey) => (event) => {
    const updatedJuges = [...juges];
    updatedJuges[jugeIndex][noteKey].note = event.target.value;
    setJuges(updatedJuges);
  };
  


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        {Master === true ? (
          <>
            <Grid item xs={6}>
              <Note notes={notes} handleNoteChange={handleNoteChange} />
            </Grid>
            <Grid item xs={6}>
              <NotesJuge juges={juges} handleJugeNoteChange={handleJugeNoteChange}  />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Note notes={notes} handleNoteChange={handleNoteChange} />
          </Grid>
        )}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "2rem", width: "100%" }}
      >
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Valider
        </Button>
      </Box>
    </div>
  );
}

export default CompetitionPage;
