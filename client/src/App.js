import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import NewAppointment from "./components/NewAppointment";

import Patients from "./components/Patients";
import SignUpPatient from "./components/SignUpPatient";
import TopNavbar from "./components/TopNavbar";

import * as React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import StartAppointment from "./components/StartAppointment";

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
  const user = useSelector((state) => state.user);
  if (user.specialty != null) {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavbar />
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/patients" element={<Patients />}></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
            <Route path="/newAppointment" element={<NewAppointment />}></Route>
            <Route path="/signUpPatient" element={<SignUpPatient />}></Route>
            <Route
              path="/startAppointment"
              element={<StartAppointment />}
            ></Route>
          </Routes>
        </div>
      </ThemeProvider>
    );
  } else if (user.allergies != null) {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavbar />
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/doctors" element={<Patients />}></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
            <Route path="/signUpPatient" element={<SignUpPatient />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    );
  } else {
    return(
      <ThemeProvider theme={theme}>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/doctors" element={<Patients />}></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
            <Route path="/signUpPatient" element={<SignUpPatient />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
