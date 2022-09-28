import { Grid } from "@mui/material";
import {  useSelector } from "react-redux";
import UserCard from "./UserCard";

function Patients() {
  const patients = useSelector((state) => state.patients);
  const doctor = useSelector((state) => state.user);
  let newArray = patients;
  if (newArray != undefined){
    newArray = newArray.map((appointment) => appointment).filter((appointment) =>  appointment.doctor_id === doctor.id);
    console.log(
      newArray
    );
  }
  return (
    <Grid container>
      {patients.map((patient) => (
        <Grid item key={patient.id} xs={12} sm={6} md={4}>
          <UserCard user={patient} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Patients;
