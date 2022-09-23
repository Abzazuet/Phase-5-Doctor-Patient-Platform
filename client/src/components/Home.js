import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Chat from "./Chat";
import Conversation from "./Conversation";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function Home() {
  // read from the Redux store
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete(user) {
    fetch(`/deleteAccount`, {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "user/logout" });
      window.alert("Account deleted");
      navigate("/");
    });
  }
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
