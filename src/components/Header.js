import { Paper, Typography, Button, Box } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Paper>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5">Nom de la compétition :</Typography>
          <Typography variant="h5">Session:</Typography>
          <Typography variant="subtitle1">Nom du plongeur :</Typography>
          <Typography variant="subtitle1">Type de compétition:</Typography>
          <Typography variant="subtitle1">Type de plongeoir: </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "1rem" }}
          >
            Sélection plongeon
          </Button>
          <Button variant="contained" color="secondary">
            Démarrer plongeon
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Header;
