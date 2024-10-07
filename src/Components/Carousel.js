import React from 'react';
import Slider from 'react-slick';
import team_img from '../Assets/team.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Stylesheets/Carousel.module.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carouselContainer}>
      <img className={styles.carouselImage} src={team_img} alt="Carousel Image" />
    </div>
  );
};

export default Carousel;
