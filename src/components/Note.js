import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Note({ notes, handleNoteChange }) {
  return (
    <>
      <Typography variant="h6">Vos notes:</Typography>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Note 1 :</TableCell>
              <TableCell align="right">
                <TextField
                  name="note1"
                  value={notes.note1}
                  onChange={handleNoteChange}
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
                  name="note2"
                  value={notes.note2}
                  onChange={handleNoteChange}
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
                  name="note3"
                  value={notes.note3}
                  onChange={handleNoteChange}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default Note;
