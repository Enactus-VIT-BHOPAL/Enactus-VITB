import React from "react";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiCake } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

export const data = [
  {
    id: 1,
    to: "home",
    offset: 0,
    icon: <BiHome className="icon" />,
  },
  {
    id: 2,
    to: "about",
    offset: 0,
    icon: <BiUser className="icon" />,
  },
  {
    id: 3,
    to: "event",
    offset: 0,
    icon: <BiCake className="icon" />,
  },
  {
    id: 4,
    to: "team",
    offset: 0,
    icon: <AiOutlineTeam className="icon" />,
  },
  {
    id: 5,
    to: "contact",
    offset: 0,
    icon: <AiOutlineContacts className="icon" />,
  },
];

export const social_links = [
  {
    id: 1,
    link: "https://discord.gg/BGZjnEns3B",
    icon: <FaDiscord />,
  },
  {
    id: 2,
    link: "https://chat.whatsapp.com/BDLCM03Wc3k3SFylQpTb4D",
    icon: <BsWhatsapp />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/enactusvitb/",
    icon: <BsInstagram />,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/enactusvitb/",
    icon: <FaLinkedinIn />,
  },
];
