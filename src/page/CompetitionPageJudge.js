import React, { useState } from "react";
import {
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
  const [juge, setJuge] = useState({
    note1: 0,
    note2: 0,
    note3: 0,
  });

  const handleNote1Change = (event) => {
    setJuge({ ...juge, note1: event.target.value });
  };

  const handleNote2Change = (event) => {
    setJuge({ ...juge, note2: event.target.value });
  };

  const handleNote3Change = (event) => {
    setJuge({ ...juge, note3: event.target.value });
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
            <Typography variant="subtitle1">Type de plongeoir: 3m</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h6">Vos notes:</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Note 1 :</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={juge.note1}
                      onChange={handleNote1Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Note 2 :</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={juge.note2}
                      onChange={handleNote2Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Note 3 :</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={juge.note3}
                      onChange={handleNote3Change}
                      InputProps={{
                        style: { height: 50, width: 50, marginRight: "10px" },
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CompetitionPageMaster;