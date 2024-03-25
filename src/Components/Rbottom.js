import React from "react";
import Style from '../Stylesheets/Rbottom.module.css'
// import html from '../Assets/htmlcss.png'

function Rbottom() {
    const cardData = [
        {
            title: "HTML/CSS",
            image: "",
            description: "",
        },

        {
            title: "Javascript",
            image: "",
            description: "",
        },

        {
            title: "",
            image: "",
            description: "",
        },

        {
            title: "",
            image: "",
            description: "",
        },

        {
            title: "",
            image: "",
            description: "",
        },

        {
            title: "",
            image: "",
            description: "",
        }
    ]



  const Card = ({ title, image, description }) => {
    return (
      <div className={Style.card}>
        <img src={image} alt="cardimage"></img>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  const cards = cardData.map((card) => (
    <Card key={card.title} title={card.title} image={card.image} description={card.description} />
  ));  

  return (
    <div className={Style.container} >
        {cards}
    </div>
  )
};

export default Rbottom;