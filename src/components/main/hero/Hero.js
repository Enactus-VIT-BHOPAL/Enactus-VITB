import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero({id, name}){
  return(
    <section
    id={id}
    className="d-flex flex-column justify-content-center align-items-center hero-section">
      <div className="hero-container">
        <h1>{name}</h1>
        <span className="hero-typewriter">
        <Typewriter
              options={{
                strings: [
                  "En-entrepreneur",
                  "Ac-action",
                  "Us-we all",
                ],
                autoStart: true,
                loop: true,
              }}
        />
        </span>
      </div>
    </section>
  )
}

export default Hero;