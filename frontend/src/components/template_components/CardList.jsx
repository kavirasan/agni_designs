import React from "react";
import CustomCard from "./CustomCard";
import AnimatedTitle from "../TextAnimation/AnimatedTitle";

const CardList = ({ CardTitle, CardData }) => {
  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-40 gap-10 py-10 bg-white ">
      <AnimatedTitle title={CardTitle} containerClass=" z-30 !text-black  " />
      <p className="border-2 w-96 h-2 bg-black/80 -mt-5   "></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-2 ">
        {CardData.map((data) => (
          <CustomCard
            CardHead={data.title}
            CardDescription={data.description}
            CardImage={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
