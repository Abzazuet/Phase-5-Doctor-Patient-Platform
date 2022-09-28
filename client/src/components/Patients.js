import { Grid } from "@mui/material";
import {  useSelector } from "react-redux";
import UserCard from "./UserCard";

function Patients() {
  const patients = useSelector((state) => state.patients);
  const doctor = useSelector((state) => state.user);

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
