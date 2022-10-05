import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AppointmentCard({ user, onStart, onCancel }) {
  const patients = useSelector((state) => state.patients);
  // read from the Redux store
  let dayTimeDisplay = new Date(
    `${user.day.split("T")[0]} ${user.day.split("T")[1]}`
  );
  function handleStart() {
    onStart(user);
  }
  function handleCancel() {
    onCancel(user);
  }

  if (onStart !== undefined) {
    let patientName = patients.filter(
      (patient) => user.patient_id === patient.id
    )[0];
    patientName = patientName.firstname + " " + patientName.lastname;
    console.log(patientName);
    let appointmentInfoToShow = {
      day: user.day,
      motive: user.motive,
      status: user.status,
      patientName: patientName,
    };
    console.log(appointmentInfoToShow);
    return (
      <Card className="card-styles">
        <CardContent>
          {Object.keys(appointmentInfoToShow).map((info) => (
            <Typography variant="h5" key={info}>
              {info}:{" "}
              {info === "day"
                ? `${dayTimeDisplay}`
                : appointmentInfoToShow[info]}
            </Typography>
          ))}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            className="button-delete"
            variant="contained"
            onClick={handleCancel}
            align="left"
          >
            Cancel
          </Button>
          <Button
            className="button-info"
            variant="contained"
            onClick={handleStart}
            align="left"
          >
            Start
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    let appointmentInfoToShow = {
      day: user.day,
      motive: user.motive,
      status: user.status,
    };
    return (
      <Card className="card-styles">
        <CardContent>
          {Object.keys(appointmentInfoToShow).map((info) => (
            <Typography variant="h5" key={info}>
              {info}: {info === "day" ? `${dayTimeDisplay}` : user[info]}
            </Typography>
          ))}
        </CardContent>
      </Card>
    );
  }
}

export default AppointmentCard;
