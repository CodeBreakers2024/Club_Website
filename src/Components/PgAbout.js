import React, { useEffect, useState, useRef } from "react";
import Style from "../Stylesheets/Pgabout.module.css";
import Domain from './Domain';
import domains from "../data/Members.json";
import useTypingEffect from "./typinghook";

export default function PgAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const typedText = useTypingEffect("About Us", 150, isVisible);
  const typedText1 = useTypingEffect(
    "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.",
    10,
    isVisible
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={Style.pageContainer}>
      <div ref={containerRef} className={Style.container}>
        <h2 className={Style.h2}>{typedText}</h2>
        <p className={Style.para}>{typedText1}</p>
      </div>
      <div className={Style.domains}>
        {domains.map((domain, i) => (
          <Domain key={i} domain={domain} />
        ))}
      </div>
    </div>
  );
}