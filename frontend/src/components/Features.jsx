import React from "react";
import DynamicCard from "./DynamicCard";
import { TiLocationArrow } from "react-icons/ti";
import DynamicCardTitle from "./DynamicCardTitle";

const Features = () => {
  return (
    <section className="bg-black pb-52 md:pl-5 px-5">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className=" text-lg text-blue-50">
            Into The World of Agni Designs
          </p>
        </div>
        <p className="max-w-md text-lg text-blue-50 opacity-50">
          When you use useState, it allows you to add state to your component.
          It returns an array with two parts: the current state value and a
          function that allows you to update that state.
        </p>
      </div>
      <DynamicCardTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <DynamicCard
          src={"../../public/hero.mp4"}
          title={<>Explore our Products</>}
          description="use useState, it allows you to add state to your component.
          It returns an array with two parts: "
          isComingSoon={false}
        />
      </DynamicCardTitle>
      <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
        <DynamicCardTitle className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <DynamicCard
            src={"../../public/hero.mp4"}
            title={<>Explore our Products</>}
            description="use useState, it allows you to add state to your component.
          It returns an array with two parts: "
            isComingSoon={false}
          />
        </DynamicCardTitle>

        <DynamicCardTitle className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <DynamicCard
            src={"../../public/hero.mp4"}
            title={<>Explore our Products</>}
            description="use useState, it allows you to add state to your component.
          It returns an array with two parts: "
            isComingSoon={false}
          />
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <DynamicCard
            src={"../../public/hero.mp4"}
            title={<>Explore our Products</>}
            description="use useState, it allows you to add state to your component.
          It returns an array with two parts: "
            isComingSoon={false}
          />
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-700 p-5">
            <h1 className="bento-title  special-font max-w-64 text-black">
              More Coming Soon !
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_2">
          <video
            src={"../../public/hero.mp4"}
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </DynamicCardTitle>
      </div>
    </section>
  );
};

export default Features;
