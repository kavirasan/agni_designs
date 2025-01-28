import React, { useEffect, useRef } from "react";
import "./TextAnimation.css"

const TextAnimation = ({name}) => {
  const textRef = useRef(null);

  useEffect(() => {
    // JavaScript Animation (equivalent to Element.animate)
    if (textRef.current) {
      textRef.current.animate(
        [
          { offset: 0 },
          {
            offset: 1,
            filter: "blur(0)",
            opacity: 1,
          },
        ],
        {
          duration: 2000,
          easing: "linear",
          delay: 5,
          iterations: 1,
          direction: "normal",
          fill: "none",
        }
      );
    }
  }, []);

  return (
    <div className=" hero-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-350 to-yellow-300">
      <div ref={textRef} className="at-item">
        {name}
      </div>
    </div>
  );
};

export default TextAnimation;
