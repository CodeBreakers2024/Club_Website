import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Stylesheets/Bottomc.module.css"
import team_img from "../Assets/team.jpg"
import c1 from "../Assets/c1.jpeg"
import c2 from "../Assets/c2.jpeg"

const BottomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>

        <div className={styles.HeadText}>
          <strong>Our Happy Family</strong>
        </div>

        <Slider {...settings}>
            <div>
              <img className={styles.carouselImage} src={c1} alt="Slide 1" />
            </div>

            <div>
              <img className={styles.carouselImage} src={c2} alt="Silde 2" />
            </div>

            <div>
              <img className={styles.carouselImage} src={team_img} alt="Silde 3" />
            </div>
        </Slider>

        <div className={styles.message}>
          <p>At TCB, we merge creativity and technology, inviting everyone to explore projects and enhance their skills</p>
        </div>
      </div>
    </div>
  );
};

export default BottomCarousel;
