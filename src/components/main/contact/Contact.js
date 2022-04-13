import React from "react";
import "./Contact.css";
import { MdLocationPin } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

function Contact(){
  return(
    <section className="contact">
    <div className="container">
    <div className="section-title">
      <h2>Contact Us</h2>
      <p>Just like the flowers are connected to the stem and stem to roots, we should stay connected to one and all and support Enactus in bringing together students from universities across the world to take up social outreach projects.</p>
    </div>        

      <div className="row">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal,%20Kotri%20Kalan,%20Ashta,%20Near,%20Indore%20Road,%20Bhopal,%20Madhya%20Pradesh%20466114+(Vellore%20Institute%20Of%20Technology,%20Bhopal)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          style={{ border: "0", width: "100%", height: "500px" }}
          allowFullScreen
        ></iframe>
        <div className="info">
          <div className="address">
            <div>
              <MdLocationPin className="contact_icon" />
            </div>
            <span className="address_text">
            Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh-466114
            </span>
          </div>
          <div className="contact_box">
            <div className="email">
              <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=enactusvitb@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="contact_icon" /></a>
            </div>
            <div className="phone">
              <a href="https://discord.gg/BGZjnEns3B">
              <FaDiscord className="contact_icon" />
              </a>
            </div>
            <div className="whatsapp">
              <a href="https://chat.whatsapp.com/BDLCM03Wc3k3SFylQpTb4D" target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill className="contact_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact;