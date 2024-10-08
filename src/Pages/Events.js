import React from "react";
import Timeline from "../Components/Timeline.js";
import styles from "../Stylesheets/meets.module.css";

const Events = () => (
  <div className={styles.timelineContainer}>
    <h1>TheCodeBreakers Events</h1>
    <Timeline />
  </div>
);

export default Events;
