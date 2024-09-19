import React from 'react';
import styles from '../Stylesheets/Achievement.module.css';

const Achievements = () => {
  const certificates = [
    {
      img: require('../Assets/certificate.jpg'),
      photo: require('../Assets/profile1.jpg'),
    },
    {
      img: require('../Assets/certificate.jpg'),
      photo: require('../Assets/profile1.jpg'),
    },
    {
      img: require('../Assets/certificate.jpg'),
      photo: require('../Assets/profile1.jpg'),
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Achievers</h2>
      <div className={styles.achievers}>
        <div className={styles.achieverBox}>Ayush Bhaiya</div>
        <div className={styles.achieverBox} style={{ marginTop: '60vh'}}>
          Nupur Didi
        </div>
        <div className={styles.achieverBox}>XYZZZZZZZ</div>
      </div>
      <h2 className={styles.title}>Our Achievements</h2>
      <div className={styles.list}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificate}>
            <img src={cert.img} alt={`Certificate ${index + 1}`} />
            <div className={styles.profilePhoto}>
              <img src={cert.photo} alt={`Profile ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
