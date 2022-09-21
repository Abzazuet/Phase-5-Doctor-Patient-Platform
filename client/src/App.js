import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import * as React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok){
        response.json().then((user) => setUser(user));
      }
    })
  }, [])
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
