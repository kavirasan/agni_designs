import React, { useEffect, useRef, useState } from "react";
import video from "../../public/hero.mp4";
import video1 from "../assets/new_agni_images/Video2.mp4"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {Link} from "react-router-dom"

import { ScrollTrigger } from "gsap/all";
import TextAnimation from "./TextAnimation/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLand = () => {
    setLoadingVideos((prev) => prev + 1);
  };

  // 0%4 = 0+1 => 1
  // 1%4 = 1+1 => 2
  // 2%4 = 2+1 => 3
  // 3%4 = 3+1 => 4
  // 4%4 = 4+1 => 1

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  useEffect(() => {
    if (loadingVideos == totalVideos - 1) {
      setIsLoading(false);
    }
  }, []);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
    console.log(upcomingVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.set("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(10% 0%, 80% 0%, 90% 90%, 0% 100%)",
      borderRadius: " 40% 10% 20% 30%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center-center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-white">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-white/50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg "
      >
        <div>
          <div className="mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              
            </div>
          </div>

          <video
                ref={nextVideoRef}
                //src={getVideoSrc(currentIndex + 1)}
                src={video1}
                loop
                muted
                id="current-video"
                className="size-64 w-full h-screen origin-center scale-150 object-cover object-center "
                onLoadedData={handleVideoLand}
                autoPlay
              />
              

         
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black/80">
          Let's Start
        </h1>

        <div className="absolute left-0 top-14 z-40 size-full text-center">
          <div className="mt-24 px-4 sm:px-10 flex items-center flex-col">
            <h1 className="hero-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-350 to-yellow-300 ">
              Agni <b>Design</b> <br /> Consultants
            {/* <TextAnimation name={"Agni Design Consultant"}/> */}
            </h1>
            <p className="mb-5 max-w-full Poppins font-semibold text-white/90 mt-5">
              Innovating MEP Designs <br /> with BIM and Revit Expertise
            </p>
          
             
          </div>
          {/* <div className="flex justify-center z-60" onClick={() => console.log("clicked")}>

          <Button
              route="/about"
              id="watch-trailer"
              title="Explore Now"
              leftIcon={<TiLocationArrow />}
              containerClass=" flex-center gap-2  "
              />  
              </div> */}
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-orange-500">
          Let's Start
        </h1>
    </div>
  );
};

export default Hero;
