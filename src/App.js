import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Calendar from "./components/calendar.js";
import Navbar from "./components/Navbar/nav-bar.js";
import Intro from "./components/intro/intro.js";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
