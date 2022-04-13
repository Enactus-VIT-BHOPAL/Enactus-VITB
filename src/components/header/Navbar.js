import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import NavlinkCard from './NavbarComponents/NavlinkCard/NavlinkCard'
import { data } from "./NavbarData";
import { BsListUl } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "./NavbarComponents/Backdrop/Backdrop";
import Profile from "./NavbarComponents/Profile/Profile";

const portalElement = document.getElementById("overlays");

function Navbar({name}){
  const [show, setShow] = useState(false);
  const [backDropShow, setBackDropShow] = useState(false);

  const handleDisplayNavBar = () => {
    setShow(!show);
  };

  const handleBackdropDisplay = () => {
    setBackDropShow(!backDropShow);
  };

  useEffect(() => {
    if (backDropShow === true && show === true) {
      // avoid body from scrolling
      document.body.style.overflow = "hidden";
    } else if (backDropShow === false && show === false) {
      // allow body to scroll
      document.body.style.overflow = "";
    }
  }, [show, backDropShow]);  

  return (
    <>
    {backDropShow &&
      ReactDOM.createPortal(
        <Backdrop
          onBackdropClick1={handleBackdropDisplay}
          onBackdropClick2={handleDisplayNavBar}
        />,
        portalElement
      )}
      <div
        className="mobile-nav-toggle d-xl-none"
        onClick={() => {
          handleBackdropDisplay();
          handleDisplayNavBar();
        }}
      >
        {show ? <AiOutlineClose /> : <BsListUl />}
      </div>

    <header className={show ? "header-section nav-active" : "header-section"}>
    <div className="d-flex flex-column nav-wrapper">
      <Profile name={name}/>
      <nav className="nav-menu navbar">
      <ul>
      {data.map(item => {
        return (
          <NavlinkCard
            item={item}
            onCardClick1={handleDisplayNavBar}
            onCardClick2={handleBackdropDisplay}
            show={show}
            key={item.id}
          />
        );
      })}
      </ul>
      </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar;