import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function Patients() {
  const patients = useSelector((state) => state.patients);
  const user = useSelector((state) => state.user);
  let oppositeToUser = user.specialty !== undefined ? "patients" : "doctors";
  return (
    <div>
      <Typography variant="h2" mt={2} ml={2}>
        {oppositeToUser.substring(0, 1).toUpperCase() +
          oppositeToUser.substring(1)}
      </Typography>
      <Grid container>
        {patients.map((patient) => (
          <Grid item key={patient.id} xs={12} sm={6} md={4}>
            <UserCard user={patient} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Patients;
