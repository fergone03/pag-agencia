import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className={styles.home} name="Home">
      <div className={styles.titleContainer}>
      <p>
        Expand your   <br />
        <b>business</b>      
      </p>
      <p>
        With the best
        <br />
        <b>online pressence
        </b>
      </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link to="Contact" smooth duration={500} className={styles.callToAction}
          >Get in Touch
           </Link>
           <Link to="Contact" smooth duration={500} className={styles.callToAction}
          >Get a quote
          </Link>
      </div>
    </div>
  );
};

export default Home;
