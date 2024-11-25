import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import bim from "../assets/bim.jpg";
import gsap from "gsap";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = (e) => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      tranformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const element = frameRef.current;
    const rect = element.getBoundingClientRect();

    if (!element) {
      return;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      tranformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="text-sm uppercase md:text-[20px]">The World of Diesgn</p>
        <div className="relative size-full">
          <AnimatedTitle
            title=" the story of Agni Design Consultant"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src={bim}
                  alt="etrance"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-center"> */}
            <div className="flex -mt-52 h-full w-full flex-col items-center md:items-center justify-center">
              <p className=" max-w-sm text-center font-circular-web text-violet-50 md:text-center">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>

              <Button
                id="realm-btn"
                title="discover prologue"
                containerClass="mt-5"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Story;
