import TopNavbar from "./TopNavbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Home() {
  // read from the Redux store
  // read from the Redux store
  const user = useSelector((state) => state.user);
  useEffect(()=>{

  }, [])
  console.log(user);
  return (
    <div>
      <TopNavbar />

    </div>
  );
}

export default Home;
