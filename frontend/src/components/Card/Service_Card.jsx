import React from "react";
import { Button, Card } from "flowbite-react";
import bim from "../../assets/bim.jpg";
import tag from "../../assets/card/tag.png"
import star from "../../assets/card/star.png"
import { HiOutlineArrowRight } from "react-icons/hi";

const Service_Card = () => {
  return (
    <Card
      className="max-w-sm relative m-5"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={bim}
    >
        {/* <img src={tag} className="w-32 h-18 absolute top-2 right-0 transform rotate-90"/> */}
        <img src={tag} className="md:w-32 w-24 -right-2 h-12 md:h-18 absolute top-2 md:-right-3.5 transform rotate-180"/>
        <img src={star} className="absolute top-5 right-14 md:right-16 w-6 h-6  md:w-6 md:h-6"/>
        <p className="absolute top-6 right-8 text-nowrap md:right-10 w-6 h-6 text-white font-bold  subpixel-antialiased text-xs">Premium</p>
         {/* <div class=" absolute top-10 right-0 w-24 h-4 rounded-md bg-black transform rotate-45"></div> */}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button gradientMonochrome='purple'>Learn More 
      <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Card>
  );
};

export default Service_Card;
{
  /* svljlsfnlsn
      <div class="w-36 h-4 rounded-md bg-black transform rotate-45"></div> */
}
