import "./App.css";
import Login from "./components/Login";

import * as React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
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
