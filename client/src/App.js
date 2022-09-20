import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import {Route, Routes} from "react-router-dom"

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3952D4",
      },
      secondary: {
        main: "#F45858",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
      <Login />

        <Routes>
          <Route>
            
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
