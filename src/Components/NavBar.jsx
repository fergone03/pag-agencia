import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Services" },
    { id: 3, link: "HowWeWork", display: "How we work" },
    { id: 4, link: "Benefits" },
  ];

  return (
    <div className={styles.navBar}>
     <p>DISO | Digital Solutions</p>
     <AiOutlineMenu />
    { 
      navBarOpen  &&(
        <ul>
        {links.map((x) => (
          <div>
            <Link>
            {x.link === "HowWeWork" ? "How we work" : x.link}
            </Link>
          </div>
        ))}
      </ul>
      )
    }
    </div>
  );
};

export default NavBar;
