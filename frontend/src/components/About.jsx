import React from "react";
import img from "../assets/new_agni_images/7.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        {/* <h2 className="text-md uppercase md:text-[20px]">
          Welcome to Agni Designs
        </h2> */}
        <h1 className="special-font hero-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-350 to-yellow-300  text-center">
        Welcome to Agni Designs
        </h1>
        <AnimatedTitle
          title="Delivering Sustainable Engineering Solutions with Expertise and Innovation"
          containerClass="mt-5 !text-black/80 text-center"
        />
        <div className="about-subtext">
          <p>
            AGNI was ignited in the recent year to Derive and Deliver paramount
            engineering standards in MEP design. As a team having collective
            experience of more than two decades in both design and
            implementation, we now offer engineering design solutions and value
            additions to bridge the prevailing gaps in the industry.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={img}
            alt="background"
            className="absolute left-0 top-0  size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
