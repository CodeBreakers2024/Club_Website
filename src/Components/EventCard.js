import React from "react";
import styles from "../Stylesheets/meets.module.css";

const EventCard = ({ image, title, description, date }) => (
  <div className={styles.card}>
    <img className={styles.eventImage} src={image} alt={title} />
    <h3 className={styles.eventTitle}>{title}</h3>
    <p className={styles.eventDescription}>{description}</p>
    <p className={styles.eventDate}>{date}</p>
  </div>
);

export default EventCard;
