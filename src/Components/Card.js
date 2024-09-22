import React from "react";
import styles from "../Stylesheets/Card.module.css"

function Card(props) {

  const {
    name,
    description,
    dates,
    entryFees,
    isActive,
    image,
    teamSize,
  } = props.data;


  return (
    <div className={styles.container}>
      <img
        className={styles.background}
        src={image}
        alt=""
      />
      <h1 className={styles.heading}>{name}</h1>
      <div className={styles.contents}>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>
            {description?.length > 400
              ? description.substring(0, 400) + "..."
              : description}
          </p>
        </div>
        <div className={styles.detailSection}>
          <div className={styles.details}>
            <span>Date - {dates}</span>
            <span>Fees - {entryFees} </span>
            <span>Team Size - {teamSize}</span>
          </div>
          {isActive ? <button>Register</button> : <p>Event Has Ended</p>}
        </div>
      </div>
    </div>
  );
}

export default Card;
