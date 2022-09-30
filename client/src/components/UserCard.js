import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

function UserCard({ user, handleDelete }) {
  // read from the Redux store
  //Permit only this parameters to be rendered
  if (user.specialty != null) {
    const userToRender = {
      id: user.id,
      username: user.username,
      dob: user.dob,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    return (
      <Card className="card-styles">
        <CardContent>
          {Object.keys(userToRender).map((info) => (
            <Typography variant="h5" key={info}>
              {info}: {userToRender[info]}
            </Typography>
          ))}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button className="button-delete"
            variant="contained"
            onClick={onUserDelete}
            align="left"
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    const userToRender = {
      id: user.id,
      username: user.username,
      dob: user.dob,
      firstname: user.firstname,
      lastname: user.lastname,
      allergies: user.allergies,
    };
    return (
      <Card className="card-styles">
        <CardContent>
          {Object.keys(userToRender).map((info) => (
            <Typography variant="h5" key={info}>
              {info}: {userToRender[info]}
            </Typography>
          ))}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          
        </CardActions>
      </Card>
    );
  }
  function onUserDelete() {
    handleDelete(user);
  }
}

export default UserCard;
