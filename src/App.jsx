import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Delete, Send } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Add } from "./components/Add";

function App() {
  const GreenButton = styled(Button)({
    backgroundColor: "lightgreen",
    margin: 2,
    color: "white",
    "&:hover": { backgroundColor: "red" },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    // <div>
    //   <Button
    //     variant="text"
    //     sx={{
    //       backgroundColor: "skyblue",
    //       margin: 2,
    //       color: "white",
    //       "&:hover": { backgroundColor: "red" },
    //       "&:disabled": {
    //         backgroundColor: "gray",
    //         color: "white",
    //       },
    //     }}
    //     onClick={() => {
    //       alert("Clicked!");
    //     }}
    //   >
    //     Hello
    //   </Button>
    //   <Button
    //     variant="contained"
    //     color="otherColor"
    //     size="small"
    //     endIcon={<Send></Send>}
    //   >
    //     Hello
    //   </Button>
    //   <Button variant="outlined" startIcon={<Delete></Delete>}>
    //     Delete
    //   </Button>
    //   <GreenButton variant="contained">About</GreenButton>
    //   <Typography variant="h3" component="h3">
    //     h1. Heading
    //   </Typography>
    // </div>

    // <div>
    //   <Button
    //     variant="text"
    //     sx={{
    //       backgroundColor: "skyblue",
    //       margin: 2,
    //       color: "white",
    //       "&:hover": { backgroundColor: "red" },
    //       "&:disabled": {
    //         backgroundColor: "gray",
    //         color: "white",
    //       },
    //     }}
    //     onClick={() => {
    //       alert("Clicked!");
    //     }}
    //   >
    //     Hello
    //   </Button>
    //   <Button
    //     variant="contained"
    //     color="otherColor"
    //     size="small"
    //     endIcon={<Send></Send>}
    //   >
    //     Hello
    //   </Button>
    //   <Button variant="outlined" startIcon={<Delete></Delete>}>
    //     Delete
    //   </Button>
    //   <GreenButton variant="contained">About</GreenButton>
    //   <Typography variant="h3" component="h3">
    //     h1. Heading
    //   </Typography>
    // </div>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.default">
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
