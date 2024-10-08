import React from "react";
import styles from '../styles/Card.module.css';
import DomainCard from "./DomainCard.js";
import ProfileCard from "./ProfileCard";

const Domain = ({ domain = {
  title: "",
  discord: "",
  tags: [],
  bgColorStyle: {
    background: "background: linear-gradient(135deg, #004d40, #00695c, #00796b, #00897b, #009688, #26a69a, #4db6ac, #80cbc4, #b2dfdb)"
  },
  members: []
}
// , theme 
}) => {

  return (
    <div className={styles.container} style={{ paddingLeft: "2rem" }}>
      {/* <section className={theme ? styles.card_list_light : styles.card_list}> */}
      <section className={styles.card_list}>
        <DomainCard
          title={domain.title}
          tags={domain.tags}
          discord={domain.discord}
          style={domain.bgColorStyle}
          // theme={theme}
        />
        {
          domain.members.map(({ name, position, alt, profilePic, socials,Section }, i) => {
            return (
              <>
                <ProfileCard
                  name={name}
                  section={Section}
                  position={position}
                  alt={alt}
                  profilePic={profilePic}
                  socials={socials}
                  marginFlag={i === 0}
                  key={i}
                  // theme={theme}
                />
              </>)
          })
        }
      </section>
    </div>
  )
}

export default Domain
