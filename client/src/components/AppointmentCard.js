import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AppointmentCard({ user, handleDelete }) {
  // read from the Redux store
  function handleStartAppointment() {
    user.status = "started";
    fetch(`/appointments/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log("appointment STARTED");
      } else {
        console.log("something went wrong");
      }
    });
  }
  function handleCancelAppointment() {
    user.status = "cancelled";
    fetch(`/appointments/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("appointment DELETED");
      } else {
        console.log("something went wrong");
      }
    });
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
            {info}: {user[info]}
          </Typography>
        ))}
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCancelAppointment}
          align="left"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleStartAppointment}
          align="left"
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
}

export default AppointmentCard;
