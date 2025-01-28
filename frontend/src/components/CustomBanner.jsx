import React, { useEffect } from "react";
import AnimatedTitle from "./TextAnimation/AnimatedTitle";
import four from "../assets/new_agni_images/4.png"

const CustomBanner = ({ image, title, description }) => {
  return (
    <div className="w-full h-[30rem]  flex flex-col justify-center items-center mx-2 md:px-20 gap-5">
      <div className="absolute top-0 left-0 bg-white/40 w-full h-[34rem] z-10 " />
      <img
        src={image}
        className="absolute top-0 left-0 bg-white/70 w-full h-[34rem] object-cover object-center"
      />
      <AnimatedTitle title={title} containerClass=" z-30 !text-black" />

      <p className="mx-5 z-30 font-semibold text-center">{description}</p>
    </div>
  );
};

export default CustomBanner;

{
  /* <div className="relative ">
<img
  src={image}
  className="top-0 h-96 md:h-[30rem] z-20 w-full object-fill object-center"
/>


<div>
  <AnimatedTitle
    title={title}
    containerClass="absolute top-32 left-[4rem]  md:top-40 md:left-[24rem] text-xl !text-black md:text-5xl font-bold "
  />
  <p className="absolute text-xs md:text-lg top-44 px-4 md:top-60 md:left-[20rem] md:w-[50rem] text-center">
    {description}
  </p>
</div>
</div> */
}
