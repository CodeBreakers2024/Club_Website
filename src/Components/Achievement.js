import React from "react";
import Style from "../Stylesheets/Achievement.module.css";
let AchievementsList = [
  {
    aname: "Tushar Pamnani",
    branch: "Computer Science and engineering [2026]",
    title: "Smart India Hackathon",
    img: "../Assets/tcblogo.jpg",
    description:
      "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
  },
  {
    aname: "Tushar Pamnani",
    branch: "Computer Science and engineering [2026]",
    title: "Smart India Hackathon",
    img: "../Assets/tcblogo.jpg",
    description:
      "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
  },
  {
    aname: "Tushar Pamnani",
    branch: "Computer Science and engineering [2026]",
    title: "Smart India Hackathon",
    img: "../Assets/tcblogo.jpg",
    description:
      "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
  },
  {
    aname: "Tushar Pamnani",
    branch: "Computer Science and engineering [2026]",
    title: "Smart India Hackathon",
    img: "../Assets/tcblogo.jpg",
    description:
      "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
  },
  {
    aname: "Tushar Pamnani",
    branch: "Computer Science and engineering [2026]",
    title: "Smart India Hackathon",
    img: "../Assets/tcblogo.jpg",
    description:
      "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
  },
];

let AchievementsCard = AchievementsList.map((obj) => {
  return (
    <div className={Style.AchievementsCard}>
      <div className={Style.leftOfAchievementCard}>
        <img src="hh" alt={"Image of " + obj.aname}></img>
      </div>
      <div className={Style.rightOfAchievementCard}>
        <h1>{obj.aname}</h1>
        <h4>{obj.branch}</h4>
        <div className = {Style.details}>
          <h2>{obj.title}</h2>
          <p>{obj.description}</p>
        </div>
      </div>
    </div>
  );
});
const AchievementsCards = () => {
  return (
    <div className={Style.AchievementsContainer}>
      <div className={Style.AchievementsHead}>Our Achievements</div>
      <div className={Style.AchievementsCards}>{AchievementsCard}</div>
    </div>
  );
};

export default AchievementsCards;
