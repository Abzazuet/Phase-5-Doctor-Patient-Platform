import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

function AppointmentCard({
  user,
  onStart,
  onCancel,
  patient,
  style,
  preescription,
}) {
  // read from the Redux store
  let medicines = useSelector((state) => state.medicines);
  let userLoggedIn = useSelector((state) => state.user);
  let frequencies = useSelector((state) => state.frequencies);
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
    let patientName;
    try {
      patientName = patient.firstname + " " + patient.lastname;
    } catch (err) {
      patientName = "Look in patient details";
    }
    let appointmentInfoToShow = {
      Day: user.day,
      Motive: user.motive,
      "Recipient name": patientName,
    };
    return (
      <Card className={style}>
        <CardContent>
          {Object.keys(appointmentInfoToShow).map((info) => (
            <Typography variant="h5" key={info}>
              {info}:{" "}
              {info === "Day"
                ? `${dayTimeDisplay}`
                : appointmentInfoToShow[info]}
            </Typography>
          ))}
        </CardContent>
        {userLoggedIn.specialty !== undefined ? (
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
        ) : (
          ""
        )}
      </Card>
    );
  } else {
    let patientName;
    let appointmentInfoToShow;
    try {
      patientName = patient.firstname + " " + patient.lastname;
    } catch (err) {
      patientName = "Look in patient details";
    }
    if (preescription !== undefined) {
      appointmentInfoToShow = {
        Day: user.day,
        Motive: user.motive,
        "Recipient name": patientName,
        Medicine: medicines.filter(
          (medicine) => medicine.id === preescription.medicine_id
        )[0].name,
        Every:
          frequencies.filter(
            (frequency) => frequency.id === preescription.frequency_id
          )[0].time_hours + " hours",
        For: preescription.duration_days + " days",
      };
    } else {
      appointmentInfoToShow = {
        Day: user.day,
        Motive: user.motive,
        "Recipient name": patientName,
      };
    }

    return (
      <Card className={`${style}`}>
        <CardContent>
          {Object.keys(appointmentInfoToShow).map((info) => (
            <Typography variant="h5" key={info}>
              {info === "Medicine" ? (
                <Typography variant="h4">Preescription</Typography>
              ) : (
                ""
              )}
              {info}:{" "}
              {info === "Day"
                ? `${dayTimeDisplay}`
                : appointmentInfoToShow[info]}
            </Typography>
          ))}
        </CardContent>
      </Card>
    );
  }
}

export default AppointmentCard;
