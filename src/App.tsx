import React from "react";
import { SIdebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";

function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SIdebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </>
  );
}

export default App;
