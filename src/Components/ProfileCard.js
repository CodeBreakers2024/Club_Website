import React from "react";
import styles from "../styles/Card.module.css";

const ProfileCard = ({
  name = "",
  section = "",
  position = "",
  alt = "",
  profilePic = "",
  socials = {
    linkedin: "",
    instagram: "",
  },
  marginFlag = true,
}) => {
  return (
    <article
      className={styles.card}
      style={{ marginLeft: marginFlag ? "-2rem" : "-50px" }}
    >
      <div className={styles.profile}>
        <div className={styles.profile_pic}>
          <img
            src={profilePic}
            alt={alt}
            className={styles.profile_pic_img}
          />
        </div>
        <header className={styles.card_header}>
          <h2 className={styles.profile_name}>
            {name.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <div className={styles.profile_subtitle}>{section}</div>
          <div className={styles.profile_subtitle}>{position}</div>
        </header>
        <div className={styles.social_media}>
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`fab fa-linkedin ${styles.social_icon}`}
            >
              <span className={styles.visually_hidden}>LinkedIn profile of {name}</span>
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className={`fab fa-instagram ${styles.social_icon}`}
            >
              <span className={styles.visually_hidden}>Instagram profile of {name}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
