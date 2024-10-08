import React, { useEffect, useState, useRef } from "react";
import Style from "../Stylesheets/Pgabout.module.css";
import Domain from './Domain'
import domains from "../data/Members.json";
import useTypingEffect from "./typinghook";

function PgAbout() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const typedText = useTypingEffect("About Us", 150, startTyping); // Modified to accept startTyping
  const typedText1 = useTypingEffect("From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.", 10, startTyping); 
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const position = Math.ceil(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      setScrollPosition(position);
      
      // Start typing when scroll position is 4 or 5
      if (position >= 4 && !startTyping) {
        setStartTyping(true);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      style={{
        height:"100vh",
        width:"100%",
        overflowY: "auto",
        // overflowX:"hidden"
      }}
    >
      <div className={Style.contianer}>
        <div className={Style.h2}>{typedText}</div>
        <div className={Style.para}>
         {typedText1}
        </div>
      </div>
      {domains.map((domain, i) => {
        return <Domain key={i} domain={domain} />;
      })}
    </div>
  );
}

export default PgAbout;