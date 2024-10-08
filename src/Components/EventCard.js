import React from "react";
import styles from "../Stylesheets/meets.module.css";

const EventCard = ({ image, title, description, date }) => (
  <div className={styles.card}>
    <div className={styles.imageCard}>
      <p className={styles.eventDate}>{date}</p>
     <img className={styles.eventImage} src={image} alt={title} />
    </div>
    <div className={styles.cardDetails}>
      <h3 className={styles.eventTitle}>{title}</h3>
      <p className={styles.eventDescription}>{description}</p>
    </div>
  </div>
);

export default EventCard;
