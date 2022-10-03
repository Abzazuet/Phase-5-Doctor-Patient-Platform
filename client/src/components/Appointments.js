import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AppointmentCard from "./AppointmentCard";

function Appointments() {
  const appointments = useSelector((state) => state.appointments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleNewAppointment() {
    navigate("/newAppointment");
  }
  function handleStartAppointment(user) {
    user.status = "started";
    fetch(`/appointments/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log("appointment STARTED");
        dispatch({
          type: "appointments/current",
          appointment: user,
        });
        navigate("/startAppointment");
      } else {
        console.log("something went wrong");
      }
    });
  }
  function handleCancelAppointment(user) {
    user.status = "cancelled";
    fetch(`/appointments/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log("appointment cancelled");
        dispatch({
          type: "appointments/current",
          appointment: user,
        });
      } else {
        console.log("something went wrong");
      }
    });
  }
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" mt={2} ml={2}>
            Appointments
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box m={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleNewAppointment}
            >
              New Appointment
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={appointment.id}>
            <AppointmentCard
              user={appointment}
              onStart={handleStartAppointment}
              onCancel={handleCancelAppointment}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Appointments;
