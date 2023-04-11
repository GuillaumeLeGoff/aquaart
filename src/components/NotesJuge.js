import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

function NotesJuge({ juges ,handleJugeNoteChange}) {
  return (
    <>
      <Typography variant="h6">Notes des juges:</Typography>
      <Paper>
        <Table>
          <TableBody>
            {juges.map((juge, index) => (
              <TableRow key={index}>
                <TableCell>Juge {index + 1}</TableCell>
                {Object.keys(juge).map((key) => (
                  <TableCell align="right" key={key}>
                    <TextField
                      value={juge[key].note}
                      onChange={handleJugeNoteChange(index, key)}
                      disabled={juge[key].valide}
                      InputProps={{
                        style: {
                          height: 50,
                          width: 50,
                          marginRight: "10px",
                        },
                      }}
                    />
                    <IconButton
                      variant="contained"
                      color="primary"
                      /* onClick={() => handleDoneButtonClick(index, key)} */
                    >
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Button variant="contained" color="primary">
        Valider
      </Button> */}
      </Paper>
    </>
  );
}

export default NotesJuge;
