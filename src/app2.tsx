import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "yellowgreen",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  });
  return (
    <div className="App">
      <h2>Material Ui</h2>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="large"
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" color="initial" component="h3">
        Belajar MUI
      </Typography>
      <BlueButton>My Button Custom</BlueButton>
      <BlueButton>My Button Custom</BlueButton>
    </div>
  );
}

export default App;
