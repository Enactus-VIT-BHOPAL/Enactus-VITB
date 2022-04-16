import React from "react";
import "./Main.css";
import Contact from "./contact/Contact"
import Team from "./team/Team"
import About from "./about/About"
import Event from "./event/Event"

function Main(){
  return (
    <main className="main">
      <About id="about"/>
      <Event id="event"/>
      <Team id="team" />
      <Contact id="contact" />
    </main>
  )
}
export default Main;