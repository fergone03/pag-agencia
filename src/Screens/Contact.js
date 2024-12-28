import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact} name="Contact">
      <h2>Contact</h2>
      <form className={styles.form} action="https://getform.io/f/brooekga" method="Post"> 
        <label for="Name">Name</label>
        <input id="Name" className={styles.Input} name="Name"/>
        <label for="Email">Email</label>
        <input id="Email" type="email" className={styles.Input}  name="Email"/>
        <label for="Message" >Message</label>
        <textarea id="Message" className={styles.Input} name="Message"/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
