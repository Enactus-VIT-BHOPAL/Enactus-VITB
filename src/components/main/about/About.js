import React from "react";
import "./About.css";
import profileImg from "../../../assets/img/enactus-group-photo.jpeg";

function About({ id }) {
  return (
    <section className="about-section section-bg" id={id}>
      <div className="container">
      <div className="section-title">
        <h2>About Us</h2>
        <p>
          A strong motion is always backed by a strong and efficient team and our team commands just that. A group of one of the brightest and young minds and visionaries came together and joined hands with one aim and that was to promote the vision with which Enactus was created. </p>
      </div> 

        <div className="row">
          <div className="col-lg-4 pt-lg-4 about_img">
            <img
              src={profileImg}
              className="img-fluid"
              alt="profile-about-img"
            />
          </div>
          <div className="col-lg-8 pt-2 pt-lg-4 content">
              <h3>So, Who are we?</h3>
              <p>ENACTUS Enactus is an international not for profit organization present in 1,700 Universities across 36 Countries and has over 70,500 students as active members. It brings together students from universities across the world to take up social outreach projects for the benefit of underprivileged communities. It identifies communities in need and devises alternative business models for them, with the ultimate aim of empowering community members and transforming them into entrepreneurs. Eventually, Enactus members step out of the project after creating a self-sustaining business model for the communities so that they do not have to rely on any external party.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
