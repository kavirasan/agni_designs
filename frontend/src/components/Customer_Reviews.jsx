import React from "react";
import Testimonial_Carousel from "./Carousel/Testimonial_Carousel";
import Marquee_Carousel from "./Carousel/Marquee_Carousel";
// import WebgiViewer from "./animation/WebgiViewer";

const Customer_Reviews = () => {
  return (
    <div className="sound-section">
      <p className="text-center text-2xl md:text-4xl font-bold mt-16 md:mt-10">
       Trusted Clients
      </p>
      {/* <WebgiViewer /> */}
      <div className=" items-center  w-14 md:w-40 h-2 bg-yellow-300 rounded-lg mx-auto mb-5 mt-2"></div>

      {/* <Testimonial_Carousel /> */}
      <div className="my-10">
        <Marquee_Carousel/>
      </div>
    </div>
  );
};

export default Customer_Reviews;
