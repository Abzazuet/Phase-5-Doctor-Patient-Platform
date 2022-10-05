import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppointmentCard from "./AppointmentCard";

function StartAppointment() {
  const appointment = useSelector((state) => state.appointment);
  const patients = useSelector((state) => state.patients);
  let patientEvaluated = patients.filter((patient) => appointment.patient_id === patient.id);
  patientEvaluated = patientEvaluated[0];
  const dispatch = useDispatch();
  console.log(patientEvaluated);
  return (
    <div>
      <Grid container>
        <Grid container item xs={12} md={6} >
          <Grid  item xs={12}>
            <UserCard user={patientEvaluated} />
          </Grid>
          <Grid  item xs={12}>
            <AppointmentCard user={appointment}/>
          </Grid>
          
        </Grid>
        <Grid
          item
          xs={12}
          align="center"
          md={6}
          style={{ backgroundColor: "#3952D4" }}
        >
          <Typography variant="h2" color="white" mt={2} ml={2}>
            Preescription
          </Typography>
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
            >
              Finish appointment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default StartAppointment;
