import React from "react";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Domains from '../Components/Domains'
import BottomCarousel from '../Components/BottomCarousel';
import Home from "../Components/Home";

function Homepage() {
  return (
    <>
      <Home />
      <Carousel />
      <Cards />
      <Domains />
      <BottomCarousel />
    </>
  );
}

export default Homepage;