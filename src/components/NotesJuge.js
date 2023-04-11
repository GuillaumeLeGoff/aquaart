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

function NotesJuge({ juges }) {
  return (
    <>
      <Typography variant="h6">Notes des juges:</Typography>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Juge 1</TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Juge 2</TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                {/* Note 1 */}
                <TextField
                  value={juges.juge1.note1.note}
                  /* onChange={handleJuge1Note1Change} */
                  disabled={juges.juge1.note1.valide}
                  InputProps={{
                    style: { height: 50, width: 50, marginRight: "10px" },
                  }}
                />
                <IconButton
                  variant="contained"
                  color="primary"
                  /* onClick={() => handleDoneButtonClick("juge1", "note1")} */
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
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
