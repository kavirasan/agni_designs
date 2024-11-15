import React from "react";
import { Button } from "flowbite-react";
import banner from "../assets/Banner.png";

const QuoteBanner = () => {
  return (
    <div className="relative">
      <img src={banner} className="h-32 w-full object-fit" />
      <div className=" absolute top-0 flex flex-col  gap-5  items-center p-5 md:px-20">
        <p className=" text-xl font-semibold text-white">
          Thinking for next Big Project?
        </p>
        <Button outline gradientDuoTone="purpleToPink">
          Get a Free Quote
        </Button>
      </div>
    </div>
    // <div className="relative w-full h-20 bg-cover bg-center">
    //   {/* Glassmorphism effect */}
    //   {/* <div className="absolute inset-0 bg-white/30 bg-yellow-700 bg-opacity-30 backdrop-blur-2xl rounded-lg"> */}
    //   <div className="absolute inset-0  bg-purple-500  h-32 md:h-20 backdrop-blur-2xl">
    //     <div className="flex flex-col sm:flex-row gap-5 justify-between items-center p-5 md:px-20">
    //       <p className="text-xl font-semibold text-black">Thinking for next Big Project?</p>
    //       <Button outline gradientDuoTone="purpleToPink" >Get a Free Quote</Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default QuoteBanner;
