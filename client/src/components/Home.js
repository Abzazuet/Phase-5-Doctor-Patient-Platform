import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Chat from "./Chat";
import Conversation from "./Conversation";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  // read from the Redux store
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete() {
    fetch(`/deleteAccount/${user.id}`, {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "user/logout" });
      window.alert("Account deleted");
      navigate("/");
    });
  }

  // Get all the appointments
  useEffect(() => {
    // Save all data related to user. Will render everytime user is fetched, since it may give an error for taking too long on fetching info
    if (user.username !== undefined) {
      let typeOfUser = user.specialty !== undefined ? "doctors" : "patients";
      let oppositeToUser =
        user.specialty !== undefined ? "patients" : "doctors";
      fetch(`/${typeOfUser}/${user.id}`).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            dispatch({
              type: "appointments/save",
              appointments: data.appointments,
            });

            let patients = data[oppositeToUser];
            patients = patients.filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.id === value.id)
            );
            dispatch({
              type: "patients/save",
              patients: patients,
            });
          });
        }
      });
    }
  }, [user]);
  return (
    <div>
      <Typography variant="h2" mt={2} ml={2}>
        Home
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <UserCard user={user} handleDelete={handleDelete} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Chat />
        </Grid>
        <Grid item xs={12} md={4}>
          <Conversation />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
