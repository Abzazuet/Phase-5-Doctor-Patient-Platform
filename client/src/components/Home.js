import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Chat from "./Chat";
import Conversation from "./Conversation";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  // read from the Redux store
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete() {
    fetch(`/deleteAccount`, {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "user/logout" });
      window.alert("Account deleted");
      navigate("/");
    });
  }
  console.log(user)
  // Get all the appointments 
  useEffect(() => {
    // Save all data related to user
    fetch(`/doctors/${user.id}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data.patients)
          dispatch({
            type: "appointments/save",
            appointments: data.appointments,
          });
          dispatch({
            type: "patients/save",
            patients: data.patients,
          });
        });
        console.log(user)
      }
    });
  }, [dispatch]);
  return (
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
  );
}

export default Home;
