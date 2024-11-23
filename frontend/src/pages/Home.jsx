import React, { useEffect } from "react";
import gsap from "gsap";
import Navbar_custom from "../components/Navbar_custom";
import bg_gradient from "../assets/herobg1.jpg";
import bim from "../assets/bim.webp";
import QuoteBanner from "../components/QuoteBanner";
import About_Us from "../components/About_Us";
import Area_Expertise from "../components/Area_Expertise";
import Customer_Reviews from "../components/Customer_Reviews";
import Custom_Footer from "../components/Footer";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
// import WebViewer from "../components/animation/WebViewer";
import Model from "../components/animation/Model";
import Jumbotron from "../components/animation/Jumbotron";
import SoundSection from "../components/animation/SoundSection";
import WebgiViewer from "../components/animation/WebgiViewer";


const Home = () => {
  useEffect(() => {
    // GSAP animation for text reveal
    gsap.from(".reveal-text span", {
      opacity: 0, // Start with opacity 0
      y: 50, // Slide from below (50px down)
      duration: 1.5, // Animation duration (1.5 seconds)
      stagger: 0.1, // Delay between each letter
      ease: "power4.out", // Easing for smooth transition
    });
  }, []);

  const wrapTextInSpans = (text) => {
    return text.split("").map((letter, index) => {
      return <span key={index}>{letter}</span>;
    });
  };
  return (
    <div>
      {/* <img
        src={bg_gradient}
        className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen object-cover -z-10"
      />  */}
      <Navbar_custom />
      {/* <Model/> */}
      {/* <WebViewer/> */}
     <WebgiViewer/>
      <div className="text-center mt-10">
        <p className="text-balance text-2xl font-bold subpixel-antialiased tracking-tight text-gray-900 sm:text-7xl">
          {wrapTextInSpans("Elevating MEP Design with BIM & Revit Expertise")}
        </p>
        <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-xl/8 md:mx-40 mx-5 ">
          At Agni Consultants, we specialize in MEP design, using advanced BIM
          and Revit technologies to deliver efficient, precise solutions that
          optimize building systems and streamline project workflows.
        </p>
        <div className="flex justify-center items-center my-2">
          <Button outline gradientDuoTone="purpleToPink" className="">
            Explore More
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex justify-center my-5 mx-5">
        <img src={bim} className="bg-opacity-0 rounded-xl" />
      </div>
      <QuoteBanner />
     
      <Customer_Reviews />
      <About_Us />
      <Area_Expertise />
      <Custom_Footer />
      
    </div>
  );
};

export default Home;
