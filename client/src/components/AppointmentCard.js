import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AppointmentCard({ user, onStart, onCancel }) {
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
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "#3952D4",
        margin: "1rem",
        color: "white",
      }}
    >
      <CardContent>
        {Object.keys(user).map((info) => (
          <Typography variant="h5" key={info}>
            {info}: {info === "day" ? `${dayTimeDisplay}` : user[info]}
          </Typography>
        ))}
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCancel}
          align="left"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleStart}
          align="left"
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
}

export default AppointmentCard;
