import React, { useState } from "react";
import { Route } from "react-router-dom";
import Calendar from "./components/calendar/calendar.js";
import Navbar from "./components/Navbar/nav-bar.js";
import Intro from "./components/intro/intro.js";
import Portfolio from "./components/Portfolio/portfolio.js";
import Contact from "./components/contact/contact.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Portfolio/>
      <Calendar />
      <ToastContainer />
      <Contact />

        {/* <Route exact path="" component={Navbar}/>
        <Route exact path="" component={Intro}/>
        <Route exact path="" component={Portfolio}/>
        <Route exact path="" component={Calendar}/>
        <Route exact path="" component={Contact}/> */}
    </div>
  );
}

export default App;
