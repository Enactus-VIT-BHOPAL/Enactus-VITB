import React from 'react'
import './Profile.css'
import logo from '../../../../../src/assets/img/enactus-logo.png'
import {social_links} from '../../NavbarData'

function Profile({name}) {
  return (
  <div className="profile">
    <img
      src={logo}
      className="rounded-circle img-fluid"
      alt="profile-nav-img"
    />
    <h1>{name}</h1>
    <div className="social-links mt-3 text-center">
      {social_links.map(link => {
        return <a href={link.link} key={link.id} target="_blank" rel="noopener noreferrer">{link.icon}</a>;
      })}
    </div>
  </div>
  );
}

export default Profile;