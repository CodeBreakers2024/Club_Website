import React from "react";
// import Image from "../Assets/Aboutbg.svg";
import Style from "../Stylesheets/Pgabout.module.css";

function PgAbout() {
  return (
    <>
      <div className={Style.contianer}>
       <h2 className={Style.h2}> About Us </h2>
       <p className={Style.para}>The CodeBreakers Club is a club of Shri Ramdeobaba College Of Engineering And Management, Nagpur, Maharashtra-440013. The CodeBreakers Club comes under the Technical Club and has a speciality of Programming languages, Competitive coding, Web Developemnt, IOT, AIML, Open Source Intelligence and many more. The club is a SRC (Student's Representative Counsil) which is a student body ran by the cuurent students studying in the college. The club organises many events for the college and represents RCOEM in different events held over All over India.</p>
      </div>
    </>
  );
}

export default PgAbout;
