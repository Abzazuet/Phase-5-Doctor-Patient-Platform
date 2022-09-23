import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function UserCard({ user, handleDelete }) {
  // read from the Redux store
  const doctorActions = [{ delete: "red" }];
  const patientActions = [{ delete: "red" }, { info: "blue" }];
  let actions;
  if (user.specialty != null) {
    actions = doctorActions;
  } else {
    actions = patientActions;
  }
  console.log(Object.keys(user));
  function onUserDelete() {
    handleDelete(user);
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
        {actions.map((action) => (
          <Button
            variant="contained"
            color="secondary"
            onClick={onUserDelete}
            align="left"
            key={Object.keys(action)}
          >
            {Object.keys(action)}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default UserCard;
