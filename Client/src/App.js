import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Calendar from "./components/calendar/calendar.js";
import Navbar from "./components/Navbar/nav-bar.js";
import Intro from "./components/intro/intro.js";
import Portfolio from "./components/Portfolio/portfolio.js";
import Contact from "./components/contact/contact.js";
 
function App() {

  return (
    <div className="App">
      {/* <Navbar/>
      <Intro/>
      <Portfolio/>
      <Calendar />
      <Contact /> */}
      <Routes>
        <Route exact path="/addevent" component={Navbar}/>
        <Route exact path="" component={Intro}/>
        <Route exact path="" component={Portfolio}/>
        <Route exact path="" component={Calendar}/>
        <Route exact path="" component={Contact}/>
      </Routes>
    </div>
  );
}

export default App;
