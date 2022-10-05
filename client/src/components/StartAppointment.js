import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppointmentCard from "./AppointmentCard";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function StartAppointment() {
  const appointment = useSelector((state) => state.appointment);
  const patients = useSelector((state) => state.patients);
  const navigate = useNavigate();

  let patientEvaluated = patients.filter(
    (patient) => appointment.patient_id === patient.id
  );
  patientEvaluated = patientEvaluated[0];
  const dispatch = useDispatch();
  const [appointmentData, setAppointmentData] = useState({
    notes: "",
    medicine: "",
    frequency: "",
    days: "",
  });
  const medicines = useSelector((state) => state.medicines);
  const frequencies = useSelector((state) => state.frequencies);
  function onChangeData(event) {
    setAppointmentData({
      ...appointmentData,
      [event.target.id]: event.target.value,
    });
  }
  function onChangeMedicine(event) {
    setAppointmentData({
      ...appointmentData,
      medicine: event.target.value,
    });
  }
  function onChangeFrequency(event) {
    setAppointmentData({
      ...appointmentData,
      frequency: event.target.value,
    });
  }
  function handleAppointment(e) {
    e.preventDefault();
    // Update appointment to finished
    updateAppointment();
    createPreescription();
  }
  function updateAppointment() {
    appointment.status = "finished";
    appointment.notes = appointmentData.notes;
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      body: JSON.stringify(appointment),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log("appointment FINISHED");
      } else {
        console.log("something went wrong");
      }
    });
  }
  function createPreescription() {
    const medicine_id = medicines.filter(
      (medicine) => medicine.name === appointmentData.medicine
    )[0].id;
    const frequency_id = frequencies.filter(
      (frequency) => frequency.time_hours === appointmentData.frequency
    )[0].id;
    const duration_days = appointmentData.days;
    const appointment_id = appointment.id;
    const preescription = {
      medicine_id: medicine_id,
      frequency_id: frequency_id,
      duration_days: duration_days,
      appointment_id: appointment_id,
    };
    console.log(preescription)
    fetch("/preescriptions", {
      method: "POST",
      body: JSON.stringify(preescription),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("Preescription saved with succes");
        navigate("/");
      }
    });
  }
  return (
    <div>
      <Grid container>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography variant="h2" mt={2} ml={2}>
              Patient Details
            </Typography>
            <UserCard user={patientEvaluated} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" mt={2} ml={2}>
              Appointment Details
            </Typography>
            <AppointmentCard user={appointment} style="card-styles-pending"/>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          align="center"
          md={6}
          style={{ backgroundColor: "#3952D4" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" color="white" mt={2} ml={2}>
              Notes
            </Typography>
            <TextField
              required
              fullWidth
              className="force-white-background"
              id="notes"
              label="Notes"
              margin="dense"
              onChange={onChangeData}
              value={appointmentData.notes}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" color="white" mt={2} ml={2}>
              Preescription
            </Typography>
            <FormControl fullWidth className="margin-top">
              <InputLabel id="medicine">Select Medicine</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="medicine"
                defaultValue="none"
                label="Select Medicine"
                onChange={onChangeMedicine}
              >
                <MenuItem value="none"></MenuItem>
                {medicines.map((medicine) => (
                  <MenuItem
                    key={medicine.id}
                    value={medicine.name}
                    className="break-line"
                  >
                    <Typography variant="h6" className="break-line">
                      {medicine.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth className="margin-top">
              <InputLabel id="medicine">Select Frequency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="medicine"
                defaultValue="none"
                label="Select Frequency"
                onChange={onChangeFrequency}
              >
                <MenuItem value="none"></MenuItem>
                {frequencies.map((frequency) => (
                  <MenuItem
                    key={frequency.id}
                    value={frequency.time_hours}
                    className="break-line"
                  >
                    <Typography variant="h6" className="break-line">
                      {frequency.time_hours} hours
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              fullWidth
              id="days"
              label="Days"
              margin="dense"
              type="number"
              onChange={onChangeData}
              value={appointmentData.days}
              InputProps={{ inputProps: { min: 0 } }}
            />
            <Box
              display="flex"
              justifyContent="center"
              mt={3}
              mr={3}
              ml={3}
              mb={3}
            >
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                align="left"
                onClick={handleAppointment}
              >
                Finish appointment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default StartAppointment;
