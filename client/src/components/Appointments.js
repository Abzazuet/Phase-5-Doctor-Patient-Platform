import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
import CalendarDate from "./CalendarDate";
import Calendar2 from "./Calendar2";
function Appointments() {
  const dispatch = useDispatch();
  const [availability, setAvailability] = useState([]);

  const appointments = useSelector((state) => state.appointments);
  const Calendar = CalendarDate({
    availability,
    setAvailability,
  });
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
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        CalendarDate
        <Calendar />
        <Box m={6}>
          <Button variant="contained" fullWidth>
            New Appointment
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" mt={2}>
          Appointments
        </Typography>
        {appointments.map((appointment) => (
          <AppointmentCard user={appointment} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Appointments;
