import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

function Patients() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);

  useEffect(() => {
    fetch("/patients")
      .then((r) => r.json())
      .then((patients) =>
        dispatch({ type: "patients/save", patients: patients })
      );
  }, [dispatch]);
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
