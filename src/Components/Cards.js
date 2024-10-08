import React from "react";
import { motion } from "framer-motion";
import styles from "../Stylesheets/Cards.module.css";

// Import all images
import EventsIcon from "../Assets/Events.png";
import ProjectsIcon from "../Assets/Projects.png";
import UpskillIcon from "../Assets/Upskill.png";
import NetworkingIcon from "../Assets/Networking.png";
import MentorshipIcon from "../Assets/Mentorship.png";
import VisionIcon from "../Assets/Vision.png";

const cardData = [
  { icon: EventsIcon, name: "Events", description: "Check out the events lined up for you and join what you like. We would love for you to engage with us!" },
  { icon: ProjectsIcon, name: "Projects", description: "Explore your interests by building projects. For more inspiration, look into some of the most interesting projects that we have already worked on." },
  { icon: UpskillIcon, name: "Upskill", description: "Widen your horizons and work on anything that interests you! Continue to improve with the help of the community. We got your back!" },
  { icon: NetworkingIcon, name: "Community", description: "Get to know the family! We would love to interact with you ;" },
  { icon: MentorshipIcon, name: "Mentorship", description: "We have arranged diverse platforms for you to ping us with your doubts. Feel free to reach out to us on any of these platforms." },
  { icon: VisionIcon, name: "Vision", description: "Enabling any student, from any department, from any background, to learn and love programming, to an extent where they can step up to teach others" },
];

const Cards = () => {
  return (
    <section className={styles.whatWeDo}>
      <h2 className={styles.sectionTitle}>What Defines Us</h2>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={card.icon} alt="" className={styles.cardIcon} />
                <h3 className={styles.cardName}>{card.name}</h3>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;