// src/components/Timeline.js
import React from "react";
import styles from "../Stylesheets/meets.module.css";
import EventItem from "./EventItem";
import tempEventData from "../data/tempEventData.json";

const Timeline = () => (
  <div className={styles.timelineContainer}>
    <div className={styles.timelineLine}></div>
    {tempEventData.map((event, index) => (
      <EventItem
        left={index % 2 === 0}
        key={index}
        entryFees={event.entryFees}
        teamSize={event.teamSize}
        image={event.image}
        isActive={event.isActive}
        name={event.name}
        description={event.description}
        dates={event.dates}
      />
    ))}
  </div>
);

export default Timeline;
