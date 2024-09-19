import React from "react";
import styles from "../Stylesheets/Registration.module.css";
import RegistrationForm from "../Components/RegistrationForm";

const Registration = () => (
  <div className={styles.timelineContainer}>
    <h1>TheCodeBreakers Registration</h1>
      <RegistrationForm />
  </div>  
);

export default Registration;