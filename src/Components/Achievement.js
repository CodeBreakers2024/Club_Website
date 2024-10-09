import React, { useState } from 'react';
import styles from '../Stylesheets/Achievement.module.css';
import rohit from '../Assets/rohitA.png';
import pratham from '../Assets/prathamA.png';
import muskan from '../Assets/muskansA.png';
import suyog from '../Assets/suyogA.png';
import siddhant from '../Assets/siddhantA.png';
import anjali from '../Assets/anjaliA.png';
import amit from '../Assets/amitA.png';
import adnan from '../Assets/adnanA.png';
import ayush from '../Assets/aayushA.png';
import nupur from '../Assets/nupurA.png';

export default function Achievements() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievers = [
    {
      name: "Pratham Rajbhoj",
      image: "/profiles/Core/Pratham.jpg",
      achievements: ["Bagged a package of 16 LPA from Kickdrum"]
    },
    {
      name: "Nupur Hada",
      image: nupur,
      achievements: ["Bagged A package of 12 LPA from Aspect Ratio"]
    },
    {
      name: "Harsh Diwase",
      image: "/profiles/Core/Harsh.jpg",
      achievements: ["Bagged a package of 16 LPA from Darwinbox"]
    },
    {
      name: "Ayush Bhojwani",
      image: ayush,
      achievements: ["Bagged a package of 23 LPA from DE Shaw"]
    },
    {
      name: "Rohit Bhojwani",
      image: rohit,
      achievements: ["Working in Accenture"]
    },
  ];

  const allAwards = [
    {
      awardImage: rohit,
      name: "Rohit Bhojwani",
      description: "1st Rank in Codejam"
    },
    {
      awardImage: muskan,
      name: "Muskan Setiya",
      description: "Participated at the Moralis Web3 Filecoin Hackathon and took a prize of $867"
    },
    {
      awardImage: pratham,
      name: "Pratham Rajbhoj",
      description: "1st Rank in Techfest IIT Bombay in CoDecode at Nagpur Zonals"
    },
    {
      awardImage: siddhant,
      name: "Siddhant Jain",
      description: "Winner at SIH, Karnataka Police Hackathon, India Singapore Hackathon"
    },
    {
      awardImage: anjali,
      name: "Anjali Kushwaha",
      description: "#1 HackTheGame IIT Goa"
    },
    {
      awardImage: amit,
      name: "Amit Mondal",
      description: "Selected as Mentee in Microsoft Engage"
    },
    {
      awardImage: adnan,
      name: "Mohammad Adnan Dalal",
      description: "2nd Position National Level CTF organised by SPVCET - 10k Cash Prize"
    },
    {
      awardImage: suyog,
      name: "Suyog Parkhi, Aditya Pande",
      description: "IISF SIF'23 top 50 in India"
    },
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
      <div className={styles.awardsContainer}>
        <div>
          <h1>Awards</h1>
        </div>
        <div className={styles.awardsGrid}>
          {allAwards.map((award, index) => (
            <div key={index} className={styles.awardsHexContain}>
              <div>
                <div className={styles.hexagon} style={{ backgroundImage: `url(${award.awardImage})` }} />
              </div>
              <div className={styles.awardsDescription}>
                <p>{award.name}: {award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}