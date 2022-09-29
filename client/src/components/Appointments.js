import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
function Appointments() {
  const navigate = useNavigate();
  const appointments = useSelector((state) => state.appointments);
  function handleNewAppointment() {
    navigate("/newAppointment");
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={appointment.id}>
            <AppointmentCard user={appointment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Appointments;
