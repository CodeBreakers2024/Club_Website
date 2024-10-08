import React from "react";
import Style from '../Stylesheets/Rbottom.module.css';

function Rbottom() {
  const cardData = [
    {
      title: "HTML/CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", // HTML5 logo
      description: "Markup language for structuring web content.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      title: "Javascript",
      image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", // JavaScript logo
      description: "Programming language for web development.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      title: "Python",
      image: "https://cdn.worldvectorlogo.com/logos/python-5.svg", // Python logo
      description: "General-purpose programming language.",
      link: "https://www.python.org/"
    },
    {
      title: "Java",
      image: "https://cdn.worldvectorlogo.com/logos/java-4.svg", // Java logo
      description: "Widely-used programming language for building applications.",
      link: "https://www.java.com/"
    },
    {
      title: "C++",
      image: "https://cdn.worldvectorlogo.com/logos/c.svg", // C++ logo
      description: "Language for system/software development.",
      link: "https://isocpp.org/"
    },
    {
      title: "Figma",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma logo
      description: "Design and prototyping tool for UI/UX.",
      link: "https://www.figma.com/"
    }
  ];
  

  const Card = ({ title, image, description, link }) => {
    return (
      <div className={Style.card} onClick={() => window.open(link, '_blank')}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  const cards = cardData.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      image={card.image}
      description={card.description}
      link={card.link}
    />
  ));

  return (
    <>
    <div className={Style.head}>Resources</div>
    <div className={Style.container}>{cards}</div>
    </>
  );
}

export default Rbottom;
