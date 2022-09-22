import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function UserCard({ user, handleDelete }) {
  // read from the Redux store
  console.log(Object.keys(user));
  function onUserDelete(){
    handleDelete(user)
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
      <CardActions>
        <Button variant="contained" color="secondary" onClick={onUserDelete}>
          Delete Account
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;
