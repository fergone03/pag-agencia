import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return(
  <div className={styles.services} name="Services">
    <p>
      We solve your company's needs by creating a custom-made solution. 
    </p>
    <img className={styles.webImage} src={require("../assets/web1.jpg")} alt="Foto de una web" />
  </div>);
};

export default Services;
