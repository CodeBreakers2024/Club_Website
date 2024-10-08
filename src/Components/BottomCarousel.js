import React, { useRef } from "react";
import styles from "../Stylesheets/Bottomc.module.css";
import team_img from "../Assets/team.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BottomCarousel = () => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -galleryRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: galleryRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradientBox}>
        <div className={styles.carouselContainer}>

          <div className={styles.HeadText}>
            <p>Our Happy Family</p>
          </div>

          <div className={styles.galleryboxContainer}>
            <button className={styles.scrollButtonLeft} onClick={scrollLeft}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <div className={styles.galleryBox} ref={galleryRef}>
              <img src={team_img} alt="Img1"/>
              <img src={team_img} alt="Img2"/>
              <img src={team_img} alt="Img3"/>
            </div>

            <button className={styles.scrollButtonRight} onClick={scrollRight}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <div className={styles.message}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCarousel;