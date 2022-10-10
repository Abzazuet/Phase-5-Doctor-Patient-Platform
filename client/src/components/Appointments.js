import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import AppointmentCard from "./AppointmentCard";

function Appointments() {
  let appointments = useSelector((state) => state.appointments);
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();
  let patients = useSelector((state) => state.patients);
  appointments = appointments.sort(
    (a, b) =>
      new Date(`${a.day.split("T")[0]} ${a.day.split("T")[1]}`) -
      new Date(`${b.day.split("T")[0]} ${b.day.split("T")[1]}`)
  );
  const dispatch = useDispatch();
  const isDoctor = userData.specialty != undefined;
  function handleNewAppointment() {
    navigate("/newAppointment");
  }
  let cancelledAppointments = appointments.filter(
    (appointment) => appointment.status == "cancelled"
  );
  let pendingAppointments = appointments.filter(
    (appointment) => appointment.status == "pending"
  );
  let finishedAppointments = appointments.filter(
    (appointment) => appointment.status == "finished"
  );

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
        window.alert("Appointment will start");
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
        dispatch({
          type: "appointments/current",
          appointment: user,
        });
        window.alert("Appointment was cancelled");
        navigate("/home");
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
          {isDoctor ? (
            <Box m={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleNewAppointment}
              >
                New Appointment
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Box ml={3} mr={3}>
        <Grid container>
          <Grid container item xs={12} lg={4}>
            <Typography variant="h2" mt={2} ml={2} align="center">
              Pending
              <Grid container align="left">
                {pendingAppointments.map((appointment) => (
                  <Grid item xs={12} sm={6} md={4} lg={12} key={appointment.id}>
                    <AppointmentCard
                      user={appointment}
                      style="card-styles-pending"
                      onStart={handleStartAppointment}
                      onCancel={handleCancelAppointment}
                      patient={
                        patients.filter(
                          (patient) => appointment.patient_id === patient.id
                        )[0]
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Typography>
          </Grid>
          <Grid container item xs={12} lg={4}>
            <Typography variant="h2" mt={2} ml={2} align="center">
              Cancelled
              <Grid container align="left">
                {cancelledAppointments.map((appointment) => (
                  <Grid item xs={12} sm={6} md={4} lg={12} key={appointment.id}>
                    <AppointmentCard
                      user={appointment}
                      style="card-styles-cancelled"
                      patient={
                        patients.filter(
                          (patient) => appointment.patient_id === patient.id
                        )[0]
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Typography>
          </Grid>
          <Grid container item xs={12} lg={4}>
            <Typography variant="h2" mt={2} ml={2} align="center">
              Finished
              <Grid container align="left">
                {finishedAppointments.map((appointment) => (
                  <Grid item xs={12} sm={6} md={4} lg={12} key={appointment.id}>
                    <AppointmentCard
                      user={appointment}
                      style="card-styles-finished"
                      patient={
                        patients.filter(
                          (patient) => appointment.patient_id === patient.id
                        )[0]
                      }
                      preescription={appointment.preescriptions[0]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Appointments;
