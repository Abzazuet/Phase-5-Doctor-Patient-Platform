import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../styles/Login.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Login() {
  const [logData, setLogData] = useState({ login: "", password: "" });
  function onChangeData(event) {
    setLogData({
      ...logData,
      [event.target.id]: event.target.value,
    });
    console.log(logData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(logData)
  }
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="left" ml={1} mt={2}>
          Doctor
          <br />
          <Typography variant="h4" color="primary">
            Patient
          </Typography>
          Platform
        </Typography>
        <Typography mt={5} ml={2} variant="h1">
          Login
        </Typography>
        <Typography
          variant="subtitle1"
          maxWidth={410}
          ml={5}
        >
          Sign in with your data. If you are a patient, a doctor must create you
          an account
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component="form"
          noValidate
          autoComplete="off"
          margin={5}
        >
          <div>
            <TextField
              required
              fullWidth
              id="login"
              label="Email"
              margin="dense"
              onChange={onChangeData}
              value={logData.login}
            />
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              margin="dense"
              type="password"
              onChange={onChangeData}
              value={logData.password}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              mt={15}
            >
              Log in
            </Button>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ backgroundColor: "#3952D4" }}
        align="center"
        pb={35}
        mr={0}
      >
        <Typography variant="h1" mt={50} color="white" align="center" mb={5}>
          Keep Track
        </Typography>
        <Typography
          variant="subtitle1"
          maxWidth={410}
          margin={5}
          color="white"
          align="center"
        >
          As a doctor you can keep track of all of your patients, their
          prescriptions, their appointments and notes
        </Typography>
        <Typography
          variant="subtitle1"
          margin={5}
          color="white"
          align="center"
          maxWidth={410}
        >
          As a patient you can keep track of your pills, see how often you have
          to drink one. Your doctors, chat with them if you have any questions,
          make appointments.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
