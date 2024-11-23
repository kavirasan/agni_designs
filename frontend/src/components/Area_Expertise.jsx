import React from "react";
import Service_Card from "./Card/Service_Card";

const Area_Expertise = () => {
  return (
    <div className="sound-section">
      <p className="text-center text-2xl md:text-4xl font-bold">
        Area of Expertise
      </p>
      <div className=" items-center  w-14 md:w-40 h-2 bg-yellow-300 rounded-lg mx-auto mb-5 mt-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center ">
        <Service_Card />
        <Service_Card />
        <Service_Card />
      </div>
    </div>
  );
};

export default Area_Expertise;
