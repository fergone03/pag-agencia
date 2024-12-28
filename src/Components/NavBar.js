import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

const detectDimension = () => {
  setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Services" },
    { id: 3, link: "HowWeWork", display: "How we work" },
    { id: 4, link: "Benefits" },
  ];
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && (
        <p className={styles.logo}>EMPRESS | Digital Solutions</p>
      )}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} color="#f1f1f1"
         size={25}   style={{ cursor: 'pointer' }} 
/>
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
            style={{ cursor: 'pointer', paddingTop: '1em' }} 
            />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
           onClick={() => setNavBarOpen(false)}
           to="Contact"
           smooth
           duration={500}
           className={styles.contactLink}
           >
            Contact
            </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
