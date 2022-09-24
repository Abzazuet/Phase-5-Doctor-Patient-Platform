import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
function Appointments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    fetch("appointments").then((response) => {
      if (response.ok) {
        response
          .json()
          .then((appointments) =>
            dispatch({ type: "appointments/save", appointments: appointments })
          );
      }
    });
  }, [dispatch]);
  function handleNewAppointment() {
    navigate("/newAppointment");
  }
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h2" mt={2}>
          Appointments
        </Typography>
        {appointments.map((appointment) => (
          <Grid item xs={8}>
            <AppointmentCard user={appointment} />
          </Grid>
        ))}
      </Grid>
      <Box m={6}>
        <Button variant="contained" fullWidth onClick={handleNewAppointment}>
          New Appointment
        </Button>
      </Box>
    </Grid>
  );
}

export default Appointments;
