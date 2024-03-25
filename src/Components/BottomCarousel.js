import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Stylesheets/Bottomc.module.css"

const Carousel = () => {
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
        <div className={styles.toptext}>Our Happy Family</div>
          <Slider {...settings} className={styles.imgContainer}>
            <div className={styles.img1}>
              <h3>ndfdjfdfnd fdfkndf ndf df dfd fd fdfdnf dnd fdf </h3>
            </div>
            <div className={styles.img1}>
            <h3>ndfdjfdfnd fdfkndf ndf df dfd fd fdfdnf dnd fdf </h3>
            </div>
            <div className={styles.img1}>
            <h3>ndfdjfdfnd fdfkndf ndf df dfd fd fdfdnf dnd fdf </h3>
            </div>
          </Slider>
        </div>
        
      </div>
  );
};

export default Carousel;