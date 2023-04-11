import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

import Note from "../components/Note";
import Header from "../components/Header";
import NotesJuge from "../components/NotesJuge";

function CompetitionPage() {
  const Master = true;
  const [notes, setNotes] = useState({
    note1: 0,
    note2: 0,
    note3: 0,
  });
  const [juges, setJuges] = useState({
    juge1: {
      note1: { note: 0, valide: false },
      note2: { note: 0, valide: false },
      note3: { note: 0, valide: false },
    },
    juge2: {
      note1: { note: 0, valide: false },
      note2: { note: 0, valide: false },
      note3: { note: 0, valide: false },
    },
  });

  const handleNoteChange = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value });
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
              <NotesJuge juges={juges} setJuges={setJuges} />
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
