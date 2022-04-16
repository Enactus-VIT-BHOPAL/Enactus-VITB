import React from "react";
import "./event.css";
import Img1 from "../../../assets/img/1.jpg";

function Event({ id }) {
  return (
    <section className="event " id={id}>
      <div className="container">
      <div className="section-title">
        <h2>Events</h2>
        <p>An array of events wait for you to take part in, right from fiestas to hackathons and much more.</p>
      </div> 

        <div className="row">
          <div className="col-lg-4 pt-lg-4 about_img">
            <img
              src={Img1}
              className="img-fluid"
              alt="profile-about-img"
            />
          </div>
          <div className="col-lg-8 pt-2 pt-lg-4 content">
              <h3>One India</h3>
              <p>An evening full of fun and frolic and all about bringing together and celebrating various cultures of India. The event is a part of the technocultural fest AdVitya 2022. Each and every state’s community is invited to come on stage and showcase their rich culture in the most grand manner.</p>
                <p> Register by: 16th April, 2022 </p> 
                <p> Date: 20th April, 2022 </p>
                <p> Time: 15:00-16:00 </p>
                <p> Venue: Amphitheater </p>
                <p>  Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFuvw3cQ4MaSb9-_tr-yJew5U707Drk1Wjg-LDRzqLh3ie6A/viewform?usp=sf_link">here</a> to register</p> 
                <p> Stay tuned to know more. </p>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
