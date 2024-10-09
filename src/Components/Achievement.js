import React, { useState } from 'react';
import styles from '../Stylesheets/Achievement.module.css';

export default function Achievements() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievers = [
    {
      name: "Pratham Bhojwani",
      image: "/profiles/Core/Pratham.jpg",
      achievements: [
        "Won the National Coding Championship 2023",
        "Bagged a package of 16 LPA from Kickdrum"
      ]
    },
    {
      name: "Nupur Hada",
      image: "/profiles/Core/Nupur.jpg",
      achievements: [
        "Published a groundbreaking research paper in AI",
        "Bagged A package of 12 LPA from Aspect Ratio"
      ]
    },
    {
      name: "Harsh Diwase",
      image: "/profiles/Core/Harsh.jpg",
      achievements: [
        "Secured first place in the International Math Olympiad",
        "Bagged a package of 16 LPA from Darwinbox"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Achievements</h1>
      <h2 className={styles.subtitle}>Hall of Fame</h2>

      <div className={styles.achieversGrid}>
        {achievers.map((achiever, index) => (
          <div 
            key={index} 
            className={styles.achieverCard}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardInner} style={{
              transform: hoveredCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>
              <div className={styles.cardFront}>
                <img
                  src={achiever.image}
                  alt={achiever.name}
                  className={styles.achieverImage}
                />
                <div className={styles.achieverName}>
                  <h3>{achiever.name}</h3>
                </div>
              </div>
              <div className={styles.cardBack}>
                <h3>{achiever.name}</h3>
                <ul className={styles.achievementList}>
                  {achiever.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}