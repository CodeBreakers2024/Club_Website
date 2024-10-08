import React from "react";
import styles from "../styles/Card.module.css";

const DomainCard = ({
  title = "",
  discord = "",
  tags = [],
  style = {},
  isOffice = false,
  members = [],
  overflow = "",
}) => {
  const renderTitle = () => (
    title.split("\n").map((word, i) => (
      <React.Fragment key={i}>
        {word}
        <br />
      </React.Fragment>
    ))
  );

  const renderMembers = () => (
    members.map((mem, i) => (
      <React.Fragment key={i}>
        <h6 className={styles.office_names}>{mem.name}</h6>
        <h6 className={styles.office_posi}>{mem.position}</h6>
        <div className={styles.office_profile}>
          <img
            src={mem.profilePic}
            alt={`${mem.name}'s profile`}
            height={45}
            width={45}
            className={styles.office_profile_img}
          />
        </div>
      </React.Fragment>
    ))
  );

  const renderTags = () => (
    tags.map((tag, i) => (
      <a className={styles.link} key={i} href="#">
        {tag}
      </a>
    ))
  );

  return (
    <article
      className={`${isOffice ? (overflow ? styles.expand : '') : styles.card}`}
      style={{ ...style, minWidth: "300px", maxWidth: isOffice ? "300px" : undefined }}
    >
      <header className={styles.card_header}>
        <h2 className={isOffice ? styles.office_h2 : ''} style={{ fontSize: isOffice ? "20px" : "30px" }}>
          {renderTitle()}
        </h2>
      </header>

      {isOffice ? (
        <div className={styles.office_div}>
          {renderMembers()}
        </div>
      ) : (
        <>
          <div className={styles.card_author}>
            <div className={styles.author_name}>
              {discord}
              <br />
            </div>
          </div>
          <div className={styles.tags}>
            {renderTags()}
          </div>
        </>
      )}
    </article>
  );
};

export default DomainCard;
