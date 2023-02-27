import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TextField,
} from "@mui/material";

function CompetitionPageMaster() {
  const [me, setMe] = useState({
    note1: 8.0,
    note2: 7.5,
    note3: 8.5,
    display: true,
  });

  const [juge1, setJuge1] = useState({
    note1: 8.0,
    note2: 7.5,
    note3: 8.5,
    display: true,
  });

  const [juge2, setJuge2] = useState({
    note1: 8.0,
    note2: 7.5,
    note3: 8.5,
    display: true,
  });

  const handleMeNote1Change = (event) => {
    setMe({ ...me, note1: event.target.value });
  };

  const handleMeNote2Change = (event) => {
    setMe({ ...me, note2: event.target.value });
  };

  const handleMeNote3Change = (event) => {
    setMe({ ...me, note3: event.target.value });
  };

  const handleJuge1Note1Change = (event) => {
    setJuge1({ ...juge1, note1: event.target.value });
  };

  const handleJuge1Note2Change = (event) => {
    setJuge1({ ...juge1, note2: event.target.value });
  };

  const handleJuge1Note3Change = (event) => {
    setJuge1({ ...juge1, note3: event.target.value });
  };

  const handleJuge2Note1Change = (event) => {
    setJuge2({ ...juge2, note1: event.target.value });
  };

  const handleJuge2Note2Change = (event) => {
    setJuge2({ ...juge2, note2: event.target.value });
  };

  const handleJuge2Note3Change = (event) => {
    setJuge2({ ...juge2, note3: event.target.value });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">
              Nom de la compétition - Session 1
            </Typography>
            <Typography variant="subtitle1">Nombre de juges: 5</Typography>
            <Typography variant="subtitle1">
              Type de compétition: Plongeon
            </Typography>
            <Typography variant="subtitle1">Type de plongoir: 3m</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <TextField
              value={juge1.note1}
              onChange={handleMeNote1Change}
              InputProps={{
                style: { height: 50, width: 50, marginRight: "10px" },
              }}
            />
            <TextField
              value={juge1.note2}
              onChange={handleMeNote2Change}
              InputProps={{
                style: { height: 50, width: 50, marginRight: "10px" },
              }}
            />
            <TextField
              value={juge1.note3}
              onChange={handleMeNote3Change}
              InputProps={{
                style: { height: 50, width: 50, marginRight: "10px" },
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Juge 1</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={juge1.note1}
                      onChange={handleJuge1Note1Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                    <TextField
                      value={juge1.note2}
                      onChange={handleJuge1Note2Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                    <TextField
                      value={juge1.note3}
                      onChange={handleJuge1Note3Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Juge 2</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={juge2.note1}
                      onChange={handleJuge2Note1Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                    <TextField
                      value={juge2.note2}
                      onChange={handleJuge2Note2Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                    <TextField
                      value={juge2.note3}
                      onChange={handleJuge2Note3Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="contained" color="primary">
              Valider
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CompetitionPageMaster;
