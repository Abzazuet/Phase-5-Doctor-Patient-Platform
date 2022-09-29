import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function StartAppointment() {
  const appointment = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
    console.log(appointment)
  return (
    <div>
      <Grid container></Grid>
    </div>
  );
}
export default StartAppointment;
