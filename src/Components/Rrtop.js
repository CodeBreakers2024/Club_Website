import React from "react";
import Style from '../Stylesheets/Rtop.module.css'

function Rtop() {
  return (
    <>
     <header></header>
      <div className={Style.rTop}>
        <div className={Style.head}>Projects</div>
        <div className={Style.wrap}>
          {/* Add content to topCard elements */}
          <div className={Style.topCard}>
            <div className={Style.proDetails}>
              <img src={""} alt="Project Placeholder" />
            </div>
          </div>
          <div className={Style.topCard}>{/* Add content here */}</div>
          <div className={Style.topCard}>{/* Add content here */}</div>
          <div className={Style.topCard}>{/* Add content here */}</div>
          <div className={Style.topCard}>{/* Add content here */}</div>
        </div>
      </div>
    </>
  );
}

export default Rtop;