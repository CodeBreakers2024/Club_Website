import React from "react";

import eventsIcon from "../Assets/events.svg";
import projectsIcon from "../Assets/projects.svg";
import upskillIcon from "../Assets/upskill.svg";
import communityIcon from "../Assets/community.svg";
import mentorshipIcon from "../Assets/mentorship.svg";
import eyeopenIcon from "../Assets/vision.svg";

import Style from "../Stylesheets/Cards.module.css";

const Cards = () => {
  return (
    <>
      <section id={Style.whatWeDo}>
        <div className={Style.head}>
          <div className={Style.headText}>What Defines Us</div>
        </div>
        <div className={Style.WeDoCards}>
          <div className={Style.cards}>
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={eventsIcon} alt="" />
              </div>
              <div className={Style.name}>Events</div>
              <div className={Style.description}>
                Check out the events lined up for you and join what you like. We
                would love for you to engage with us!
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={projectsIcon} alt="" />
              </div>
              <div className={Style.name}>Projects</div>
              <div className={Style.description}>
                Explore your interests by building projects. For more
                inspiration, look into some of the most interesting projects
                that we have already worked on.
              </div>
            </div>{" "}
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={upskillIcon} alt="" />
              </div>
              <div className={Style.name}>Upskill</div>
              <div className={Style.description}>
                Widen your horizons and work on anything that interests you!
                Continue to improve with the help of the community. We got your
                back!
              </div>
            </div>{" "}
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={communityIcon} alt="" />
              </div>
              <div className={Style.name}>Community</div>
              <div className={Style.description}>
                Get to know the family! We would love to interact with you ;
              </div>
            </div>{" "}
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={mentorshipIcon} alt="" />
              </div>
              <div className={Style.name}>Mentorship</div>
              <div className={Style.description}>
                We have arranged diverse platforms for you to ping us with your
                doubts. Feel free to reach out to us on any of these platforms.
              </div>
            </div>{" "}
            <div className={Style.card}>
              <div className={Style.icon}>
                <img src={eyeopenIcon} alt="" />
              </div>
              <div className={Style.name}>Vision</div>
              <div className={Style.description}>
                Enabling any student, from any department, from any background,
                to learn and love programming, to an extent where they can step
                up to teach others
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.quote}>
        <div className={Style.quoteText}>{"</We code and Conquer>"}</div>
      </section>
    </>
  );
};

export default Cards;
