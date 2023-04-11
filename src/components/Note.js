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
            {notes.map((note, index) => (
              <TableRow key={index}>
                <TableCell>Note {index + 1} :</TableCell>
                <TableCell align="right">
                  <TextField
                    name={index}
                    value={note.note}
                    onChange={handleNoteChange}
                    InputProps={{
                      style: {
                        height: 50,
                        width: 50,
                        marginRight: "10px",
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default Note;
