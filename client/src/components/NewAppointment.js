import CalendarDate from "./CalendarDate";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import moment from "moment";

function NewAppointment() {
  const [availability, setAvailability] = useState([]);
  const patients = useSelector((state) => state.patients);
  const appointments = useSelector((state) => state.appointments);
  const [selectedPatient, setSelectedPatient] = useState([]);
  //Create array of dates in db
  let appointmentsDates = appointments.map((appointment) => ({
    start: new Date(appointment.day),
    end: new Date(moment(appointment.day).add(1, "hours")),
  }));

  const [patientsMenu, setPatientsMenu] = useState([]);
  const Calendar = CalendarDate({
    availability,
    setAvailability,
  });
  const dispatch = useDispatch();
  function handlePatientChange(event) {
    setSelectedPatient(event.target.value);
    dispatch({
      type: "patients/appointment",
      patient: event.target.value,
    });
  }
  useEffect(() => {
    fetch("/patients").then((response) => {
      if (response.ok) {
        response.json().then((patients) => {
          setPatientsMenu(patients);
          //Append the current appointment with ant new appointments
          setAvailability([...availability, ...appointmentsDates]);
        });
      }
    });
  }, []);
  //console.log(appointments.map((appointment) => appointment.day))
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth className="margin-top">
          <InputLabel id="demo-simple-select-label">Select Patient</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="none"
            label="SelectedDessert"
            onChange={handlePatientChange}
          >
            <MenuItem value="none"></MenuItem>
            {patientsMenu.map((patient) => (
              <MenuItem key={patient.id} value={patient}  className="break-line">
                <Typography variant="h6"  className="break-line">
                  {patient.firstname} {patient.lastname}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <UserCard user={selectedPatient} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Calendar />
      </Grid>
    </Grid>
  );
}
export default NewAppointment;
