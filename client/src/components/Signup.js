import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    dob: "",
    specialty: "",
    firstname: "",
    lastname: "",
  });
  function onChangeData(event) {
    setSignUpData({
      ...signUpData,
      [event.target.id]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(signUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("Account created with success");
        navigate("/");
      } else {
        window.alert("Something went wrong");
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  function handleNavigateToHome() {
    navigate("/");
  }
  return (
    <Grid item xs={12} md={6}>
      <Button onClick={handleNavigateToHome}>
        <Typography variant="h4" align="left" ml={1} mt={2}>
          Doctor
          <br />
          <Typography variant="h4" color="primary">
            Patient
          </Typography>
          Platform
        </Typography>
      </Button>
      <Typography mt={5} ml={2} variant="h1">
        Sign-up
      </Typography>
      <Typography variant="subtitle1" maxWidth={410} ml={5}>
        This form is for Doctors only
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
            id="username"
            label="Username"
            margin="dense"
            onChange={onChangeData}
            value={signUpData.username}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            margin="dense"
            type="password"
            onChange={onChangeData}
            value={signUpData.password}
          />
          <TextField
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            margin="dense"
            type="date"
            onChange={onChangeData}
            value={signUpData.dob}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            fullWidth
            id="specialty"
            label="Specialty"
            margin="dense"
            onChange={onChangeData}
            value={signUpData.specialty}
          />
          <TextField
            required
            fullWidth
            id="firstname"
            label="First Name"
            margin="dense"
            onChange={onChangeData}
            value={signUpData.firstname}
          />
          <TextField
            required
            fullWidth
            id="lastname"
            label="Last Name"
            margin="dense"
            onChange={onChangeData}
            value={signUpData.lastname}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Sign up
          </Button>
        </div>
      </Box>
    </Grid>
  );
}

export default Signup;
