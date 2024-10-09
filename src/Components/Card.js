import React from "react";
import styles from "../Stylesheets/Events-Card.module.css";

const Card = (props) => {
  const { name, description, dates, image, alignment } = props.data;

  // Determine alignment class (left or right)
  const alignmentClass = alignment === "right" ? styles.right : styles.left;

  return (
    <div className={`${alignmentClass}`}>
      <div className={`${styles.card}`}>
        <div className={styles.imageCard}>
          <p className={styles.eventDate}>{dates}</p>
          <img className={styles.eventImage} src={image} alt={name} />
        </div>
        {/* <h3 className={styles.eventTitle}>{name}</h3> */}
        <p className={styles.eventDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
