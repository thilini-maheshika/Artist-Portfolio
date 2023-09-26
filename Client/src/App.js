import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Calendar from "./components/calendar/calendar.js";
import Navbar from "./components/Navbar/nav-bar.js";
import Intro from "./components/intro/intro.js";
import Portfolio from "./components/Portfolio/portfolio.js";
import Contact from "./components/contact/contact.js";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Portfolio/>
      <Calendar />
      <Contact />
    </div>
  );
}

export default App;
