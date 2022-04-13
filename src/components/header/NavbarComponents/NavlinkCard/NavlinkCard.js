import React from "react";
import './NavlinkCard.css'
import { Link } from "react-scroll";

function NavlinkCard({ item, onCardClick1, show, onCardClick2 }){

  const handleNavCardClick = () => { 
    if(show === true){
      // handle navbar display (in mobile-view)
      onCardClick1()
      // handle backdrop display (in mobile-view)
      onCardClick2()
    }
  };

  return (
    <li key={item.id}>
    <Link
      to={item.to}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={item.offset}
      duration={200}
      className="nav_scroll_link"
    >
      <div className="nav_link" onClick={handleNavCardClick}>
        <div className="nav_icon">{item.icon}</div>
        <div className="nav_name">{item.to}</div>
      </div>
    </Link>
  </li>
  )
}

export default NavlinkCard;