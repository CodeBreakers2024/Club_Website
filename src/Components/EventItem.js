import React, { useEffect, useState } from "react";
import styles from "../Stylesheets/EventItem.module.css";
import Card from "./Card";
function EventItem({
  name,
  description,
  dates,
  entryFees,
  isActive,
  image,
  left,
  teamSize,
}) {
  const circle = {
    backgroundColor: "blue",
    position: "absolute",
    height: "10px",
    aspectRatio: "1",
    top: "calc(50% - 5px)",
    left: "-5px",
    borderRadius: "50%",
  };

  const [isPhone,setIsPhone] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsPhone(window.innerWidth <= 750)
    })
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {(left || isPhone) && (
          <>
            <Card
              data={{
                name,
                description,
                dates,
                entryFees,
                isActive,
                image,
                teamSize,
                alignment: left && !isPhone ? "left" : "right", // Dynamically pass alignment based on 'left'
              }}
            />
            <hr />
          </>
        )}
      </div>
      <div
        style={{
          height: "100%",
          border: "2px solid white",
          position: "relative",
        }}
      >
        <div style={circle}></div>
      </div>
      <div className={styles.section}>
        {(!left || isPhone) && (
          <>
            <hr />
            <Card
              data={{
                name,
                description,
                dates,
                entryFees,
                isActive,
                image,
                teamSize,
                alignment: left && !isPhone ? "left" : "right", // Dynamically pass alignment based on 'left'

              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default EventItem;
