import React, { useState, useEffect } from "react";
import Rbottom from "../Components/Rbottom";
import Rtop from '../Components/Rrtop.js';
import MobileRtop from "../Components/MobileRtop.js";

function Resources() {
  const [isMobile, setIsMobile] = useState(false);

  
  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  
  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileRtop /> : <Rtop />}
      <Rbottom />
    </>
  );
}

export default Resources;
